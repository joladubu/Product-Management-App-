import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';
import { Pipe } from '@angular/core'

@Pipe({ // pipe decorator
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' '); //replaces value with a space
    }
}