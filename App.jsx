import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    data: "",
    loja: "",
    ifood: ""
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Informe Financeiro Diário</h1>
      <input
        placeholder="Data"
        value={data.data}
        onChange={(e) => setData({ ...data, data: e.target.value })}
      />
      <input
        placeholder="Vendas Loja (R$)"
        value={data.loja}
        onChange={(e) => setData({ ...data, loja: e.target.value })}
      />
      <input
        placeholder="Receita iFood (R$)"
        value={data.ifood}
        onChange={(e) => setData({ ...data, ifood: e.target.value })}
      />
      <p>Total: R$ {(parseFloat(data.loja) + parseFloat(data.ifood) || 0).toFixed(2)}</p>
    </div>
  );
}