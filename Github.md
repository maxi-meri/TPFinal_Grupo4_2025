> # Inicializar Git
`git init`

> # Verificar estado
`git status`

> # Agregar archivos
`git add .`

> # Git pide nombre y mail.
`git config --global user.name "TuNombre"`
`git config --global user.email "tumail@gmail.com"`

> # Hacer el primer commit
`git commit -m "Primer commit"`

> # Conectar tu proyecto con GitHub
`git branch -M main`

**Después:**
`git remote add origin URL_DEL_REPO`

**Ejemplo:**
`git remote add origin https://github.com/usuario/TpFinal-Labo-2.git`

> # Subir el proyecto
`git push -u origin main`

> # Después de eso el flujo normal es

**Cuando programás:**
`git add .`
`git commit -m "Lo que hiciste"`
`git push`

**Cuando arrancás el día:**
`git pull`

> # Como hacer una branch
`git checkout main`
`git pull`
`git checkout -b mi-rama`

**Trabaja.**

**Después:**
`git add .`
`git commit -m "Lo que hizo"`
`git push -u origin mi-rama`

*Hace Pull Request en la web de github*

> # Cómo cambiar entre ramas
**Volver a main**
`git checkout main`	

**Ir a otra rama**
`git checkout enemigos`

> #Cómo traer ramas nuevas
`git fetch`

> # Cómo ver TODAS las ramas
`git branch -a`

> # IMPORTANTE: antes de cambiar de rama

*Hacé commit o guardá cambios.*