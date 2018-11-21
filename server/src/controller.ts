import {Controller, Get} from 'routing-controllers'

@Controller()
export default class MainController {

    @Get("/advertisements")
    main() {
       return {
         data: [
             {id: 1, title: "I'm an ad"},
             {id: 2, title: "I'm an ad 2"},
             {id: 3, title: "I'm an ad 3"},
         ]
       }
    }

}