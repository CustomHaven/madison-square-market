$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');
  
    const $cartMenu = $('#cartMenu');
    const $accountMenu = $('#accountMenu');
    const $helpMenu = $('#helpMenu');
    const $dropDownMenu = $('.dropdown-menu');
  
    const $arrayDropDown = [$cart, $account, $help];
  
    const $arrayMenu = [$cartMenu, $accountMenu, $helpMenu];
    
    // let count = 0;
    // $arrayDropDown.on('click', event => {
    //     event.on('click', () => {
    //         $arrayMenu[count].show();
    //     })
    //     count++;
    // });

    // let count = 0;
    // $arrayDropDown.forEach(drop => {
    //   drop.addEventListner('click', () => {
    //     $arrayMenu[count].show();
    //   })
    //   count += 1;
    // });
  
    
    $cart.on('click', () => {
      $cartMenu.show();
    });
    $account.on('click', () => {
      $accountMenu.show();
    });
    $help.on('click', () => {
      $helpMenu.show();
    });
  
    $dropDownMenu.on('mouseleave', () => {
      $dropDownMenu.hide();
    });
    
    // $arrayMenu.forEach(menu => {
    //   menu.on('mouseleave', () => {
    //     menu.hide();
    //   })
    // })
  
    
    // const $dropDown = $('.dropdown');
    
  
    // $dropDown.each(drop => {
    //   drop.on('click', () => {
    //     $dropDownMenu.each(menu => {
    //       menu.show()
    //     })
    //   })
    // })
    // $dropDown.forEach(drop => {
  
    // })on('click', () => {
    //   $dropDownMenu.show();
    // });
  
    // $dropDownMenu.on('mouseleave', () => {
    //   $dropDownMenu.hide();
    // })
  
});