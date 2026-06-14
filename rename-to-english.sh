#!/bin/bash

# ============================================================
# Script: rename-to-english.sh
# Renomeia arquivos/pastas do projeto Vitryne mobile para inglês
# e atualiza todos os imports automaticamente.
# Rode na raiz do projeto (onde fica a pasta src/)
# ============================================================

set -e

echo "🔄 Iniciando renomeação..."

# ============================================================
# PASSO 1: Renomear PASTAS (de dentro pra fora)
# ============================================================

# carrinho → cart
mv src/screens/carrinho/Screens       src/screens/carrinho/screens       2>/dev/null || true
mv src/screens/carrinho               src/screens/cart                   2>/dev/null || true

# endereco → address
mv src/screens/address/Componets      src/screens/address/components     2>/dev/null || true  
mv src/screens/endereco/Componets     src/screens/endereco/components    2>/dev/null || true
mv src/screens/endereco/Screens       src/screens/endereco/screens       2>/dev/null || true
mv src/screens/endereco               src/screens/address                2>/dev/null || true

# pagamento → payment
mv src/screens/pagamento/Components   src/screens/pagamento/components   2>/dev/null || true
mv src/screens/pagamento/Screens      src/screens/pagamento/screens      2>/dev/null || true
mv src/screens/pagamento              src/screens/payment                2>/dev/null || true

# pedido → order
mv src/screens/pedido/Screens         src/screens/pedido/screens         2>/dev/null || true
mv src/screens/pedido                 src/screens/order                  2>/dev/null || true

# Subpastas com nome em português
mv src/screens/address/components/CardEndereco   src/screens/address/components/CardAddress   2>/dev/null || true
mv src/screens/payment/components/OpcaoPagamento src/screens/payment/components/PaymentOption 2>/dev/null || true
mv src/screens/payment/screens/Pagamento         src/screens/payment/screens/Payment          2>/dev/null || true
mv src/screens/payment/screens/PaguePix          src/screens/payment/screens/PayPix           2>/dev/null || true

echo "✅ Pastas renomeadas."

# ============================================================
# PASSO 2: Renomear ARQUIVOS .tsx / .ts
# ============================================================

# cart
mv src/screens/cart/screens/MenuCarrinho.tsx     src/screens/cart/screens/CartMenu.tsx        2>/dev/null || true

# address
mv src/screens/address/components/CardAddress/CardEndereco.tsx  src/screens/address/components/CardAddress/CardAddress.tsx  2>/dev/null || true
mv src/screens/address/screens/Endereco.tsx                     src/screens/address/screens/Address.tsx                     2>/dev/null || true

# payment
mv src/screens/payment/components/PaymentOption/OpcaoPagamento.tsx  src/screens/payment/components/PaymentOption/PaymentOption.tsx  2>/dev/null || true
mv src/screens/payment/screens/Payment/Pagamento.tsx                src/screens/payment/screens/Payment/Payment.tsx                2>/dev/null || true
mv src/screens/payment/screens/PayPix/PaguePix.tsx                  src/screens/payment/screens/PayPix/PayPix.tsx                  2>/dev/null || true

# order
mv src/screens/order/screens/PedidoConfirmado.tsx   src/screens/order/screens/OrderConfirmed.tsx   2>/dev/null || true

echo "✅ Arquivos renomeados."

# ============================================================
# PASSO 3: Atualizar IMPORTS em todos os arquivos
# ============================================================

echo "🔄 Atualizando imports..."

# Função auxiliar para substituir strings em todos os arquivos
replace_in_files() {
  local from="$1"
  local to="$2"
  grep -rl "$from" src/ --include="*.tsx" --include="*.ts" | while read file; do
    sed -i "s|$from|$to|g" "$file"
    echo "  updated: $file"
  done
}

# Pastas em português → inglês
replace_in_files "carrinho"        "cart"
replace_in_files "endereco"        "address"
replace_in_files "pagamento"       "payment"
replace_in_files "pedido"          "order"

# Subpastas
replace_in_files "Componets"       "components"
replace_in_files "Components"      "components"
replace_in_files "Screens"         "screens"

# Nomes de arquivos/componentes
replace_in_files "MenuCarrinho"    "CartMenu"
replace_in_files "CardEndereco"    "CardAddress"
replace_in_files "Endereco"        "Address"
replace_in_files "OpcaoPagamento"  "PaymentOption"
replace_in_files "Pagamento"       "Payment"
replace_in_files "PaguePix"        "PayPix"
replace_in_files "PedidoConfirmado" "OrderConfirmed"

echo "✅ Imports atualizados."

# ============================================================
# PASSO 4: Resultado final
# ============================================================

echo ""
echo "🎉 Concluído! Nova estrutura:"
find src -type f \( -name "*.tsx" -o -name "*.ts" \) | sort
