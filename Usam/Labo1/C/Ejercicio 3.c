#include <stdio.h>
#include <string.h>

int main(){
    char cadena[151];
    int posiciones, i;
    
    printf("Ingrese la cantidad de posiciones a mover: ");
    scanf("%d", &posiciones);
    getchar();

    printf("Ingrese una cadena de caracteres: ");
    fgets(cadena, sizeof(cadena), stdin); 

    if (cadena[0] != '\0' && cadena[strlen(cadena) - 1] == '\n'){
        cadena[strlen(cadena) - 1] = '\0';
    }

    for(i = 0; cadena[i] != '\0'; i++){
        if(cadena[i] >= 'a' && cadena[i] <= 'z'){
            cadena[i] = ((cadena[i] - 'a' + posiciones) % 26) + 'a';
        } else if(cadena[i] >= 'A' && cadena[i] <= 'Z'){
            cadena[i] = ((cadena[i] - 'A' + posiciones) % 26) + 'A';
        }
    }
    printf("Cadena codificada: %s\n", cadena);

    return 0;
}