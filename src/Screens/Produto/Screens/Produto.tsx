import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../../Types/navigation";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Produto">;

const SIZES = [
  { label: "PP", disabled: true },
  { label: "P", disabled: false },
  { label: "M", disabled: false },
  { label: "G", disabled: false },
  { label: "GG", disabled: true },
];

export function Produto({ navigation }: Props) {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Product image area */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
            }}
            style={styles.productImage}
            resizeMode="contain"
          />

          {/* Back button */}
          <Pressable style={styles.iconTopLeft}>
            <Text style={{ fontSize: 18, color: "#333" }}>‹</Text>
          </Pressable>

          {/* Discount badge */}
          <View
            style={[
              styles.badgeDiscount,
              { top: 16, left: 0, right: 0, alignSelf: "center", width: 68 },
            ]}
          >
            <Text style={styles.badgeDiscountText}>-20% OFF</Text>
          </View>

          {/* Top right icons */}
          <View style={styles.iconTopRight}>
            <Pressable style={styles.iconCircle}>
              <Text style={{ fontSize: 16 }}>♡</Text>
            </Pressable>
            <Pressable style={styles.iconCircle}>
              <Text style={{ fontSize: 15 }}>⎙</Text>
            </Pressable>
          </View>
        </View>

        {/* Info card */}
        <View style={styles.infoCard}>
          {/* Store row */}
          <View style={styles.storeRow}>
            <View style={styles.storeLeft}>
              <View style={styles.storeIconBox}>
                <Text style={{ fontSize: 14 }}>✉️</Text>
              </View>
              <View>
                <Text style={styles.storeName}>Atelier Lua</Text>
                <Text style={styles.storeMeta}>
                  ★ 4,8 (212) · 1,2 km · ABERTA
                </Text>
              </View>
            </View>
            <Text style={styles.storeLink}>Ver loja →</Text>
          </View>

          {/* Product name */}
          <Text style={styles.productName}>
            Vestido Midi Linho — Verde Sálvia
          </Text>

          {/* Price */}
          <View style={styles.priceRow}>
            <Text style={styles.priceOriginal}>R$ 240,00</Text>
            <Text style={styles.priceNew}>R$ 189,00</Text>
            <Text style={styles.priceSaving}>Você economiza R$ 51</Text>
          </View>

          {/* Size selector */}
          <Text style={styles.sizeLabel}>Tamanho</Text>
          <View style={styles.sizeRow}>
            {SIZES.map((size) => {
              const isSelected = selectedSize === size.label;
              return (
                <Pressable
                  key={size.label}
                  style={[
                    styles.sizeOption,
                    isSelected && styles.sizeOptionSelected,
                    size.disabled && styles.sizeOptionDisabled,
                  ]}
                  onPress={() => !size.disabled && setSelectedSize(size.label)}
                  disabled={size.disabled}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      isSelected && styles.sizeTextSelected,
                      size.disabled && styles.sizeTextDisabled,
                    ]}
                  >
                    {size.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Stock warning */}
          {selectedSize === "M" && (
            <View style={styles.stockWarning}>
              <Text>⚠️</Text>
              <Text style={styles.stockWarningText}>
                Apenas 3 restantes neste tamanho
              </Text>
            </View>
          )}

          {/* Description */}
          <Text style={styles.descriptionLabel}>Descrição</Text>
          <Text style={styles.descriptionText}>
            Vestido midi confeccionado em linho puro, na cor Verde Sálvia.
            Modelagem solta e confortável, ideal para o dia a dia ou ocasiões
            especiais. Possui alças finas ajustáveis e abertura discreta nas
            costas.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom action bar */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.wishlistBtn}>
          <Text style={{ fontSize: 20 }}>♡</Text>
        </Pressable>
        <Pressable
          style={styles.addToCartBtn}
          onPress={() => navigation.navigate("MenuCarrinho")}
        >
          <Text style={styles.addToCartText}>Adicionar ao carrinho</Text>
        </Pressable>
      </View>
    </View>
  );
}
