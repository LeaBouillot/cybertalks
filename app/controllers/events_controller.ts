import type { HttpContext } from "@adonisjs/core/http";

export default class EventController {

    async eventShow({ view }: HttpContext) {
        return view.render('pages/event', {
            'title': 'Tous les évenements Cybertalks', 
            'speakers': [
                {'name': 'Martin JSX'},
                {'name': 'Martin EJS'},
                {'name': 'Alain de Typescript'},
                {'name': 'Ahmed Ben React'},
                {'name': 'Salif Si Adonis'},
                

            ],
        })
    }
}