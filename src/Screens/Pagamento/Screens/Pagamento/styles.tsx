import { StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../../../../Styles/commonStyles';

export const styles = StyleSheet.create({
  footer: {
    padding: spacing.md,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  // Stepper
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  step: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  stepBadge: {
    width: 20, height: 20, borderRadius: radius.full,
    alignItems: 'center', justifyContent: 'center',
  },
  stepBadgeActive: { backgroundColor: colors.primary },
  stepBadgeIdle: { backgroundColor: colors.border },
  stepBadgeText: { color: colors.white, fontSize: 11, fontWeight: '700' },
  stepLabel: { fontSize: 12, color: colors.textMuted },
  stepLabelActive: { color: colors.text, fontWeight: '600' },
  stepLine: { flex: 1, height: 1, backgroundColor: colors.border, marginHorizontal: spacing.xs },
  stepLineActive: { backgroundColor: colors.primary },

  // Opção de pagamento
  option: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.card,
  },
  optionSelected: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  radio: {
    width: 20, height: 20, borderRadius: radius.full, borderWidth: 2,
    borderColor: colors.border, alignItems: 'center', justifyContent: 'center',
  },
  radioSelected: { borderColor: colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: radius.full, backgroundColor: colors.primary },
  optionIcon: {
    width: 36, height: 36, borderRadius: radius.sm,
    backgroundColor: colors.primarySoft,
    alignItems: 'center', justifyContent: 'center',
  },
  optionTitle: { fontSize: 15, fontWeight: '600', color: colors.text },
  optionDesc: { fontSize: 12, color: colors.textMuted, marginTop: 2 },

  // Novo cartão
  addBtn: {
    borderWidth: 1.5, borderStyle: 'dashed', borderColor: colors.primary,
    borderRadius: radius.md, padding: spacing.md, alignItems: 'center',
  },
  addBtnText: { color: colors.primary, fontWeight: '600' },

  // Resumo
  summaryTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: spacing.sm },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  summaryLabel: { fontSize: 14, color: colors.textMuted },
  summaryValue: { fontSize: 14, color: colors.text },
  summaryDiscount: { color: colors.success },
  totalRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    borderTopWidth: 1, borderTopColor: colors.border, paddingTop: spacing.sm,
  },
  totalLabel: { fontSize: 16, fontWeight: '700', color: colors.text },
  totalValue: { fontSize: 16, fontWeight: '700', color: colors.primary },

  // Botão com ícone
  buttonRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.xs },
});