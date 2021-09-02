export class TableConfigModel implements ITableConfig {

  keyId: string;
  isAllChecked: boolean;
  indeterminate?: boolean;
  itemSelected: Set<any>;

  constructor(source: ITableConfig) {
    this.keyId = source.keyId;
    this.isAllChecked = source.isAllChecked;
    this.indeterminate = source.indeterminate;
    this.itemSelected = source.itemSelected;
  }

  public reset(this: ITableConfig): void {
    this.indeterminate = false;
    this.isAllChecked = false;
    this.itemSelected = new Set<any>();
  }

  public getItemSelectedArray(this: TableConfigModel): any[] {
    return Array.from(this.itemSelected);
  }

  public onAllChecked(this: TableConfigModel, eventChecked: boolean, listOfData: any[]): void {
    listOfData.filter(({ disabled }) => !disabled).forEach(x => {
      if (eventChecked) {
        this.itemSelected.add(x[this.keyId]);
      } else {
        this.itemSelected.delete(x[this.keyId]);
      }
    });

    const listOfEnabledData = listOfData.filter(({ disabled }) => !disabled);
    const isAllChecked = listOfEnabledData.every(x => this.itemSelected.has(x[this.keyId]));
    const indeterminate = listOfEnabledData.some(x => this.itemSelected.has(x[this.keyId])) && !isAllChecked;
    this.isAllChecked = isAllChecked;
    this.indeterminate = indeterminate;
  }

  public onItemChecked(this: TableConfigModel, id: any, eventChecked: boolean, listOfData: any[]): void {
    if (eventChecked) {
      this.itemSelected.add(id);
    } else {
      this.itemSelected.delete(id);
    }
    const listOfEnabledData = listOfData.filter(({ disabled }) => !disabled);
    const isAllChecked = listOfEnabledData.every(x => this.itemSelected.has(x[this.keyId]));
    const indeterminate = listOfEnabledData.some(x => this.itemSelected.has(x[this.keyId])) && !isAllChecked;
    this.isAllChecked = isAllChecked;
    this.indeterminate = indeterminate;
  }
}

export interface ITableConfig {
  keyId: string;
  isAllChecked: boolean;
  indeterminate?: boolean;
  itemSelected: Set<any>;
}
