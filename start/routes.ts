/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.on('/categories').render('pages/categories')

router.on('/categories/:id').render('pages/category')

router.on('/event/:id').render('pages/event')

router.on('/contact').render('pages/contact')





