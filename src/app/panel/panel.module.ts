import { NgModule } from '@angular/core'

import { BlockedComponent } from './blocked/blocked.component';
import { UpdateHistoryComponent } from './update-history/update-history.component';
import { BlockedHistoryComponent } from './blocked-history/blocked-history.component';
import { LastUpdateComponent } from './last-update/last-update.component';



@NgModule({
    declarations: [BlockedComponent, UpdateHistoryComponent, BlockedHistoryComponent, LastUpdateComponent],
    imports: [],
    exports: [BlockedComponent, UpdateHistoryComponent, BlockedHistoryComponent, LastUpdateComponent]
})
export class PanelModule {}