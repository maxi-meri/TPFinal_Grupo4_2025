#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

int main(){

    int sucursal, numeroFactura;
    float montoVenta;
    char continuar;
    
    
    float mayorMonto[7] = {0};
    int facturaMayor[7] = {0};
    float totalVentas[7] = {0};
    int contadorOperaciones[7] = {0};

    do {
        printf("Ingrese el numero de sucursal \n");
        printf("1. Centro\n");
        printf("2. Sur\n");
        printf("3. Norte\n");
        printf("4. Este\n");
        printf("5. Oeste\n");
        printf("6. Online\n");
        printf("Sucursal:");
        scanf("%d", &sucursal);
        
        if (sucursal < 1 || sucursal > 6) {
            printf("Sucursal invalida. Intente de nuevo.\n");
            continue;
        }

        printf("Ingrese el numero de factura: ");
        scanf("%d", &numeroFactura);
        printf("Ingrese el monto de la venta: ");
        scanf("%f", &montoVenta);

       if (montoVenta > mayorMonto[sucursal]) {
            mayorMonto[sucursal] = montoVenta;
            facturaMayor[sucursal] = numeroFactura;
        }

        totalVentas[sucursal] += montoVenta;
        contadorOperaciones[sucursal]++;

        printf("Desea ingresar otra operacion? (s/n): ");
        getchar();
        scanf("%c", &continuar);
        continuar = tolower(continuar);
    } while (continuar == 's');

    printf("\nFacturas con mayor monto por sucursal:\n");

    for (int i = 1; i <= 6; i++) {
        if (contadorOperaciones[i] > 0) {
            printf("Sucursal %d - Factura con mayor monto: %d (Monto: %f)\n", i, facturaMayor[i], mayorMonto[i]);
        } else {
            printf("Sucursal %d - No se registraron operaciones.\n", i);
        }
    }

        //no pude hacer lo de promedio del sucursal
    return 0;
}