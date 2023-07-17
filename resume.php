






<html>
    <head>
        <link href="" rel="stylesheet">
        <script src="por.js"></script>
    </head>
    
    <body class="">  
        print_r($_POST);
        <table>
        <caption> فرم اطلاعات</caption>
    </table>
        <table>

            <h1>مشخصات فردی</h1>
           
            <tr>
                <td>نام:</td>
                <td><?= $_POST['fullname'] ?></td>
            </tr>
            
            <tr>
                <td> شماره تلفن همراه:</td>
                <td><?= $_POST['number']?></td>
            </tr>
            <tr>
                <td>تاریخ تولد:</td>
                <td><?= $_POST['brithday'] ?></td>
            </tr>
            <tr>
                <td>رنگ مورد علاقه:</td>
                <td><?= $_POST['color'] ?></td>
            </tr>
            <tr>
                <td>مقطع تحصیلی:</td>
                <td><? $_POST['grade']?></td>
            </tr>
        </table>
        <h1>اطلاعات کاری</h1>
        <table class="TWO">
            <tr>
                <td> مدت تجربه های کاری:</td>
                <td><? $_POST['workip']?></td>
        </tr>
        <tr>
            <td>کار های تجربه شده:</td>
            <td><? $_POST['work'] ?></td>
        </tr>
        <tr>
            <td>شغل فعلی:</td>
            <td><? $_POSTP['jop']?></td>
        </tr>
        <tr>
            <td>در کنار تحصیل به چه کاری میپردازین:</td>
            <td><? $_POST['worker']?></td>
        </tr>
        <tr>
            <td>محل کارآموزی:</td>
            <td><? $_POST['address']?></td>
        </tr>

        </table>
    </body>
    
</html>