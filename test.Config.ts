/* export class TestConfig{

static appUrl = "http://tutorialsninja.com/demo/index.php?route=common/home"


static email1 = "qedge123@gmail.com"
static Password1= "qedge123@gmail.com"
} */

export class TestConfig {

    //BASE_URL!
    static appUrl = process.env.BASE_URL!;

    static email1 = process.env.APPUSERNAME!;

    static password1 = process.env.PASSWORD!;

    // Product details
    static productName = "MacBook";
    static invalidproduct = "invalidProduct123";
   
}