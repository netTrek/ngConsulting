import { AfterContentInit, Component, ContentChild, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserItemComponent } from '../user-item/user-item.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ContentChildren ( UserItemComponent )
  items: QueryList<UserItemComponent>;
  private subscription: Subscription;

  constructor () {
  }

  ngOnInit () {
    console.log ( 'ini' );
  }

  ngAfterContentInit (): void {
    console.log ( this.header );
    this.logItems();
    this.subscription = this.items.changes.subscribe( () => this.logItems() );
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
    this.subscription = undefined;
  }

  private logItems () {
    console.log ( this.items.toArray() );
  }

}
