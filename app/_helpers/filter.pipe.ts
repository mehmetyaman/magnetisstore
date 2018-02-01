import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if(it.firstName.includes(searchText) || it.lastName.includes(searchText) || it.phoneNumber.includes(searchText))
            return it;
        });
    }
}
