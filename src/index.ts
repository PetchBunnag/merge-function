export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < collection1.length && j < collection2.length && k < collection3.length) {
        const min = Math.min(collection1[i], collection2[j], collection3[k]);
        result.push(min);
        if (min === collection1[i]) {
            i++;
        } else if (min === collection2[j]) {
            j++;
        } else {
            k++;
        }
    }

    while (i < collection1.length) {
        result.push(collection1[i++]);
    }

    while (j < collection2.length) {
        result.push(collection2[j++]);
    }

    while (k < collection3.length) {
        result.push(collection3[k++]);
    }

    return result;
}