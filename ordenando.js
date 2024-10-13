// Função para trocar dois elementos no vetor
const swap = (vetor, i, j) => {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
};

// Função para embaralhar os elementos do vetor
const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length);
        let pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// Algoritmo Bubble Sort
const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

// Algoritmo Selection Sort
const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) minIndex = j;
        }
        swap(vetor, i, minIndex);
    }
};

// Algoritmo Quick Sort com particionamento
const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let pivotIndex = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pivotIndex - 1);
        quick_sort(vetor, pivotIndex + 1, fim);
    }
};

// Função de particionamento para Quick Sort
const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};
