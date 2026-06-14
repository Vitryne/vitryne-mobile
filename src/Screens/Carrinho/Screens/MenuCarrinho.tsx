import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { fmt, useMenuCarrinho } from "../../../Hooks/MenuCarrinho";
import { colors, commonStyles } from "../../../Styles/commonStyles";
import { RootStackParamList } from "../../../Types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "CartMenu">;

export function MenuCarrinho({ navigation }: Props) {
  const {
    cart,
    hasUnavailable,
    subtotal,
    totalDelivery,
    total,
    storesWithDelivery,
    updateQty,
    removeUnavailable,
    DISCOUNT,
  } = useMenuCarrinho();

  return (
    <View style={commonStyles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner indisponível */}
        {hasUnavailable && (
          <View style={styles.warningBanner}>
            <Ionicons
              name="alert-circle-outline"
              size={18}
              color={colors.danger}
              style={{ marginTop: 1 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.warningText}>
                1 item ficou indisponível desde que você adicionou.
              </Text>
              <Pressable onPress={removeUnavailable}>
                <Text style={styles.warningLink}>Remover</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Cards por loja */}
        {cart.map((store) => (
          <View key={store.id} style={styles.storeCard}>
            <View style={styles.storeHeader}>
              <View style={styles.storeIconBox}>
                <Ionicons
                  name="storefront-outline"
                  size={16}
                  color={colors.primary}
                />
              </View>
              <View>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeDelivery}>
                  Entrega em {store.deliveryTime} · Frete{" "}
                  {fmt(store.deliveryFee)}
                </Text>
              </View>
            </View>

            {store.items.map((item, idx) => (
              <View
                key={item.id}
                style={[styles.itemRow, idx > 0 && styles.itemDivider]}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={[
                    styles.itemImg,
                    item.unavailable && styles.itemImgUnavailable,
                  ]}
                />
                <View style={styles.itemInfo}>
                  <View style={styles.itemNameRow}>
                    <Text style={styles.itemName} numberOfLines={2}>
                      {item.name}
                    </Text>
                    {item.unavailable && (
                      <View style={styles.unavailableBadge}>
                        <Text style={styles.unavailableBadgeText}>
                          INDISPONÍVEL
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.itemSize}>Tamanho {item.size}</Text>
                  <View style={styles.itemFooter}>
                    <View style={styles.qty}>
                      <Pressable
                        style={styles.qtyBtnOutline}
                        onPress={() => updateQty(store.id, item.id, -1)}
                        disabled={item.unavailable}
                        hitSlop={8}
                      >
                        <Text style={styles.qtyBtnOutlineText}>−</Text>
                      </Pressable>
                      <Text style={styles.qtyNum}>{item.quantity}</Text>
                      <Pressable
                        style={styles.qtyBtnFilled}
                        onPress={() => updateQty(store.id, item.id, +1)}
                        disabled={item.unavailable}
                        hitSlop={8}
                      >
                        <Text style={styles.qtyBtnFilledText}>+</Text>
                      </Pressable>
                    </View>
                    <Text style={styles.itemPrice}>{fmt(item.price)}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Resumo */}
        <View style={styles.summarySection}>
          <View style={styles.sumRow}>
            <Text style={styles.sumLabel}>Subtotal</Text>
            <Text style={styles.sumVal}>{fmt(subtotal)}</Text>
          </View>
          <View style={styles.sumRow}>
            <Text style={styles.sumLabel}>
              Fretes ({storesWithDelivery.length} lojas)
            </Text>
            <Text style={styles.sumVal}>{fmt(totalDelivery)}</Text>
          </View>
          <View style={styles.sumRow}>
            <Text style={styles.sumLabel}>Desconto</Text>
            <Text style={styles.sumDiscount}>- {fmt(DISCOUNT)}</Text>
          </View>
          <View style={styles.sumTotalRow}>
            <Text style={styles.sumTotalLabel}>Total</Text>
            <Text style={styles.sumTotalVal}>{fmt(total)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* CTA */}
      <View style={styles.ctaArea}>
        <Pressable
          style={styles.ctaBtn}
          onPress={() => navigation.navigate("Endereco")}
        >
          <Text style={styles.ctaText}>Ir para o checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}
