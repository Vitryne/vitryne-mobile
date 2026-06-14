import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../styles/commonStyles";
import { RootStackParamList } from "../../../types/navigation";
import { styles } from "./styles";

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  unavailable?: boolean;
}

interface StoreGroup {
  id: string;
  name: string;
  deliveryTime: string;
  deliveryFee: number;
  items: CartItem[];
}

const INITIAL_CART: StoreGroup[] = [
  {
    id: "store-1",
    name: "Atelier Lua",
    deliveryTime: "40-60 min",
    deliveryFee: 12.9,
    items: [
      {
        id: "item-1",
        name: "Vestido Midi Linho Verde",
        size: "M",
        price: 189.0,
        quantity: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=160&h=160&fit=crop",
      },
      {
        id: "item-2",
        name: "Camiseta Cropped Off-White",
        size: "P",
        price: 79.0,
        quantity: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=160&h=160&fit=crop",
      },
    ],
  },
  {
    id: "store-2",
    name: "Casa Verão",
    deliveryTime: "50-70 min",
    deliveryFee: 9.9,
    items: [
      {
        id: "item-3",
        name: "Sandália Couro Caramelo",
        size: "38",
        price: 219.0,
        quantity: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=160&h=160&fit=crop",
        unavailable: true,
      },
    ],
  },
];

const DISCOUNT = 51.0;

function fmt(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

type Props = NativeStackScreenProps<RootStackParamList, "CartMenu">;

export function MenuCarrinho({ navigation }: Props) {
  const [cart, setCart] = useState<StoreGroup[]>(INITIAL_CART);
  const [hasUnavailable, setHasUnavailable] = useState(true);

  const availableItems = cart.flatMap((s) => s.items.filter((i) => !i.unavailable));
  const storesWithDelivery = cart.filter((s) => s.items.some((i) => !i.unavailable));
  const subtotal = availableItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const totalDelivery = storesWithDelivery.reduce((acc, s) => acc + s.deliveryFee, 0);
  const total = subtotal + totalDelivery - DISCOUNT;

  function updateQty(storeId: string, itemId: string, delta: number) {
    setCart((prev) =>
      prev
        .map((store) =>
          store.id !== storeId
            ? store
            : {
                ...store,
                items: store.items
                  .map((item) =>
                    item.id === itemId
                      ? { ...item, quantity: Math.max(0, item.quantity + delta) }
                      : item
                  )
                  .filter((i) => i.quantity > 0),
              }
        )
        .filter((s) => s.items.length > 0)
    );
  }

  function removeUnavailable() {
    setCart((prev) =>
      prev
        .map((s) => ({ ...s, items: s.items.filter((i) => !i.unavailable) }))
        .filter((s) => s.items.length > 0)
    );
    setHasUnavailable(false);
  }

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
                <Ionicons name="storefront-outline" size={16} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.storeName}>{store.name}</Text>
                <Text style={styles.storeDelivery}>
                  Entrega em {store.deliveryTime} · Frete {fmt(store.deliveryFee)}
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
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={styles.ctaText}>Ir para o checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}