import { Controller, Get, Render } from '@nestjs/common'

@Controller()
export class HomeController {

  @Render('Index')
  @Get()
  public homePage() {
    return {
      name: 'Aginix Technologies Co., Ltd TTT'
    }
  }
}