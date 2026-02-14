
/* Fonction de manipulation de chaînes de caractères */

// Inverser une chaîne de caractères
function reverseString(str) {
    return str.split('').reverse().join('');
} 
// Comptage des charactères dans une chaîne
function countCharacters(str) {
    return str.length;
}
// Mettre en majuscules les mots d'une chaîne
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/* Fonctions de tableaux */

// Trouver le Maximum et Minimum dans un tableau
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
// Calculer la somme d'un tableau
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
// Filtrer les éléments d'un tableau
function filterArray(arr, condition) {
    return arr.filter(condition);
}

/* Fonctions mathématiques */

// Factorielle d'un nombre
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
// Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// Séquence de Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}       
