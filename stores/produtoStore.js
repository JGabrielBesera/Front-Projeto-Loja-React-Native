import { create } from 'zustand';

const useProdutoStore = create((set) => ({
    produtos: [],
    setProdutos: (newProduto) => set(() => ({ produtos: newProduto })),
    addProduto: (newProduto) => set((state) => ({ produtos: [...state.produtos, newProduto] })),
    removeProduto: (id) => set((state) => ({
        produtos: state.produtos.filter((produto) => produto.id !== id)
    })),
    editProduto: (id, updatedProduto) => set((state) => ({
        produtos: state.produtos.map((produto) => {
            if (produto.id === id) {
                return { ...produto, ...updatedProduto };
            } else {
                return produto;
            }
        })
    }))
}));

export default useProdutoStore;

