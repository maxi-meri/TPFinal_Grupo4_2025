import pygame
import sys
import math

from jugador import Jugador
from balas import Bala
from enemigo import Enemigo

pygame.init()

ancho = 800
alto = 600

ventana = pygame.display.set_mode((ancho, alto))
pygame.display.set_caption("El juego del Papu")

clock = pygame.time.Clock()
jugador = Jugador()
balas = []
enemigos = []
spawn_timer = 0
estado = "jugando"

ronda = 1
enemigos_rondas = 5
enemigos_spawned = 0

while True:

    # Eventos
    for evento in pygame.event.get():
        # Cerrar ventana
        if evento.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        # MENU GAME OVER
        if estado == "game_over":

            if evento.type == pygame.KEYDOWN:
                # Reiniciar
                if evento.key == pygame.K_r:

                    jugador = Jugador()
                    balas = []
                    enemigos = []
                    spawn_timer = 0
                    estado = "jugando"
                # Salir
                if evento.key == pygame.K_ESCAPE:

                    pygame.quit()
                    sys.exit()

        # DISPARAR
        if evento.type == pygame.MOUSEBUTTONDOWN and estado == "jugando":

            if evento.button == 1:

                mouse_x, mouse_y = pygame.mouse.get_pos()

                centro_x = jugador.x + 50
                centro_y = jugador.y + 40

                dx = mouse_x - centro_x
                dy = mouse_y - centro_y

                distancia = math.hypot(dx, dy)

                if distancia != 0:

                    dx = dx / distancia
                    dy = dy / distancia
                    bala = Bala(centro_x, centro_y, dx, dy)
                    balas.append(bala)

    # Juego

    if estado == "jugando":

        teclas = pygame.key.get_pressed()
        jugador.mover(teclas, ancho, alto)

        # Spawn enemigos
        spawn_timer += 1

        if spawn_timer >= 180 and enemigos_spawned < enemigos_rondas:
            enemigos.append(Enemigo(ancho, alto))
            enemigos_spawned += 1
            spawn_timer = 0

        # Mover balas
        for bala in balas:
            bala.mover()

        # Mover enemigos
        for enemigo in enemigos:
            enemigo.mover(jugador)

        # Bala vs enemigo
        for enemigo in enemigos[:]:

            for bala in balas[:]:

                dx = enemigo.x - bala.x
                dy = enemigo.y - bala.y

                distancia = math.hypot(dx, dy)

                if distancia < enemigo.radio + bala.radio:

                    enemigo.recibir_daño()

                    if bala in balas:
                        balas.remove(bala)

        # Enemigo vs jugador
        for enemigo in enemigos[:]:

            dx = enemigo.x - (jugador.x + 50)
            dy = enemigo.y - (jugador.y + 40)

            distancia = math.hypot(dx, dy)

            if distancia < enemigo.radio + 30:

                jugador.vida -= enemigo.daño

                if enemigo in enemigos:
                    enemigos.remove(enemigo)

        # Eliminar enemigos muertos
        enemigos = [
            enemigo for enemigo in enemigos
            if not enemigo.muerto()
        ]

        if enemigos_spawned >= enemigos_rondas and len(enemigos) == 0:
            ronda += 1
            enemigos_rondas += 5
            enemigos_spawned = 0

        # Eliminar balas fuera pantalla
        balas = [
            bala for bala in balas
            if not bala.fuera_pantalla(ancho, alto)
        ]
        # Game over
        if jugador.vida <= 0:
            estado = "game_over"

    # DIBUJOS

    ventana.fill((0, 0, 0))

    fuente = pygame.font.SysFont(None, 40)
    texto_vida = fuente.render(f"Vida: {jugador.vida}", True, (255, 255, 255))

    ventana.blit(texto_vida, (20, 20))

    texto_ronda = fuente.render(f"Ronda: {ronda}", True, (255, 255, 255))
    ventana.blit(texto_ronda, (20, 60))

    # Dibujar jugador, balas y enemigos solo si estamos jugando

    if estado == "jugando":

        jugador.dibujar(ventana)

        for bala in balas:
            bala.dibujar(ventana)

        for enemigo in enemigos:
            enemigo.dibujar(ventana)

    # Dibujar menú game over solo si estamos en game over

    if estado == "game_over":
        fuente_grande = pygame.font.SysFont(None, 70)

        texto = fuente_grande.render("GAME OVER", True, (255, 0, 0))
        texto2 = fuente.render("R = Reiniciar", True, (255, 255, 255))
        texto3 = fuente.render("ESC = Salir", True, (255, 255, 255))

        ventana.blit(texto, (220, 180))
        ventana.blit(texto2, (260, 300))
        ventana.blit(texto3, (270, 360))

    pygame.display.update()
    clock.tick(90)