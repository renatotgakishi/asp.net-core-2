import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css'),
             require('./navmenu.component.dashboard.css'),
             require('./navmenu.component.theme.css')]
})
export class NavMenuComponent {
}
