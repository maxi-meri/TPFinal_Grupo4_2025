#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){

    int numero_secreto;
    int numero_max = 50;
    int numero_min = 1;
    int intentos = 5;
    int intento_usuario;
    srand(time(NULL)); 
    numero_secreto = (rand() % (numero_max - numero_min + 1)) + numero_min;

    printf("Bienvenido al juego de adivinar el numero!\n");
    printf("Tenes %d intentos para adivinar el numero secreto entre %d y %d.\n", intentos, numero_min, numero_max);

    while(intentos > 0){
        printf("Ingresa un numero: ");
        scanf("%d", &intento_usuario);

        if(intento_usuario < numero_min || intento_usuario > numero_max){
            printf("El numero debe estar entre %d y %d. Intente de nuevo.\n", numero_min, numero_max);
        } else if(intento_usuario == numero_secreto){
            printf("Felicidades! Adivinaste el numero secreto: %d\n", numero_secreto);
            break;
        } else {
            int diferencia = intento_usuario - numero_secreto;

            if(diferencia >= -5 && diferencia <= -2){
                printf("Estas muy cerca!\n");
            } else if(diferencia <= 5 && diferencia >= 2){
                printf("Estas muy cerca!\n");
            } else if(diferencia == -1 || diferencia == 1){
                printf("Estas a solo una posicion de distancia, no se te resta un intento.\n");
            } else if(intento_usuario < numero_secreto){
                printf("El numero secreto es mayor.\n");
            } else {
                printf("El numero secreto es menor.\n");
            }

            if(diferencia != -1 && diferencia != 1){
                intentos--;
            }
            printf("Te quedan %d intentos.\n", intentos);
        }
    }

    if(intentos == 0){
        printf("Lo siento, agotaste tus intentos. El numero secreto era: %d\n", numero_secreto);
    }

    return 0;
}