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
            if((it.firstName !== undefined && it.firstName.toLowerCase().includes(searchText))
                || (it.lastName !== undefined && it.lastName.toLowerCase().includes(searchText))
                || (it.phoneNumber !== undefined && it.phoneNumber.toLowerCase().includes(searchText))
                || (it.name !== undefined && it.name.toLowerCase().includes(searchText))
                )
            return it;
        });
    }
}
