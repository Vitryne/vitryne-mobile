import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "../../../styles/commonStyles";

export const styles = StyleSheet.create({
  scrollContent: {
    padding: spacing.md,
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },

  // Banner de aviso
  warningBanner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm,
    backgroundColor: colors.dangerSoft,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  warningText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
  warningLink: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.danger,
    marginTop: 4,
  },

  // Card de loja
  storeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  storeHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  storeIconBox: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  storeName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  storeDelivery: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 1,
  },

  // Item
  itemRow: {
    flexDirection: "row",
    gap: 12,
    paddingTop: spacing.md,
  },
  itemDivider: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.sm,
  },
  itemImg: {
    width: 80,
    height: 80,
    borderRadius: radius.sm,
    backgroundColor: colors.border,
  },
  itemImgUnavailable: {
    opacity: 0.4,
  },
  itemInfo: {
    flex: 1,
  },
  itemNameRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.xs,
    flexWrap: "wrap",
  },
  itemName: {
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
    color: colors.text,
    lineHeight: 18,
  },
  unavailableBadge: {
    backgroundColor: colors.dangerSoft,
    borderRadius: radius.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  unavailableBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.danger,
    letterSpacing: 0.3,
  },
  itemSize: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 3,
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  qty: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  qtyBtnOutline: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  qtyBtnOutlineText: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 22,
  },
  qtyBtnFilled: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnFilledText: {
    fontSize: 18,
    color: colors.white,
    lineHeight: 22,
  },
  qtyNum: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
    minWidth: 16,
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },

  // Resumo
  summarySection: {
    gap: spacing.sm,
  },
  sumRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sumLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  sumVal: {
    fontSize: 14,
    color: colors.text,
  },
  sumDiscount: {
    fontSize: 14,
    color: colors.success,
    fontWeight: "500",
  },
  sumTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.xs,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sumTotalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  sumTotalVal: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.primary,
  },

  // CTA
  ctaArea: {
    padding: spacing.md,
    paddingBottom: 28,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  ctaBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    paddingVertical: 17,
    alignItems: "center",
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.white,
  },
});