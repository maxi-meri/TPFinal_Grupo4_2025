import qrcode

datos = input("pasa el link pe: ")

img = qrcode.make(datos)

img.save("Qr.png")

print("QR creado")