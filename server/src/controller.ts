import {Controller, Get, Post, Body} from 'routing-controllers'
import Advertisement from './entity';

@Controller()
export default class AdController {

    @Get("/advertisements")
    async getAllAds() {
       return {
         data: await Advertisement.find()
       }
    }

    @Post("/advertisements")
    async createAd(@Body() ad: Advertisement) {
        return ad.save()
    }

}