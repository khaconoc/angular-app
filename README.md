## Angular app

I. **form builder**

``` html
<form nz-form [formGroup]="myForm" novalidate>
    <ng-template #controlErrorTpl let-control>
      <app-render-errors [control]="control"></app-render-errors>
    </ng-template>
    <div class="row">
      <div class="col-md-6">
        <nz-form-item>
          <nz-form-label>colText</nz-form-label>
          <nz-form-control [nzErrorTip]="controlErrorTpl">
            <input-text placeholder="Nhập colNumber" formControlName="colText"></input-text>
          </nz-form-control>
        </nz-form-item>
      </div>
    </div>
  </form>
```

> `myForm` khai báo biến myForm bên file .ts
>
> `formControlName` là biến con của myForm
---

1. ***input-text***

```html

<input-text placeholder="Nhập colNumber" formControlName="colText"></input-text>
```

> `placeholder` giá trị hiển thị mờ dưới control khi chưa có dữ liệu
>
> `formControlName` là biến con của myForm
>
> Kiểu dữ liệu: `string`
---

2. ***input-number***

```html

<input-number placeholder="Nhập colNumber" formControlName="colNumber"></input-number>
```

> `placeholder` giá trị hiển thị mờ dưới control khi chưa có dữ liệu
>
> `formControlName` là biến con của myForm
>
> Kiểu dữ liệu: `number`
---

3. ***input-date***

```html

<input-date placeholder="Nhập colDate" formControlName="colDate"></input-date>
```

> `placeholder` giá trị hiển thị mờ dưới control khi chưa có dữ liệu
>
> `formControlName` là biến con của myForm
>
> Kiểu dữ liệu: `Date`
---

4. ***input-checkbox***

```html

<input-check-box
  formControlName="colBool"
  [nzValue]="true">
  tên label control
</input-check-box>
```

> `formControlName` là biến con của myForm
>
> control `checked` nếu giá trị control bằng với `nzValue`
> > Kiểu dữ liệu trả về dạng `boolean`
---

5. ***input-float***

```html

<input-float placeholder="Nhập colFloat" formControlName="colFloat"></input-float>
```

> Kiểu dữ liệu trả về dạng `number`

---

6. ***input-select (select dưới local - chọn 1)***

```html

<input-select
  placeholder="Nhập colSelect"
  formControlName="colSelect"
  [items]="[{value: '1', text: 'item 1'},{value: '2', text: 'item 2'},{value: '3', text: 'item 3'}]"
>
</input-select>
```

> `[item]` list dữ liệu cần chọn dạng `{value: 'giatri', text:'text hiển thị'}`
> > Kiểu dữ liệu trả về dạng `any`  tùy thuộc vào `value` trong `items`
---

7. ***input-select-multiple***

```html

<input-select-multiple
  placeholder="Nhập colSelect"
  formControlName="colSelectMultiple"
  [items]="[{value: '1', text: 'item 1'},{value: '2', text: 'item 2'},{value: '3', text: 'item 3'}]"
>
</input-select-multiple>
```

> Tương tự như trên nhưng được chọn nhiều
> > Kiểu dữ liệu trả về dạng `any[]`  tùy thuộc vào `value` trong `items`
---

8. ***input-select-api***

```html

<input-select-api
  placeholder="Nhập colSelectApi"
  formControlName="colSelectApi"
  [apiService]="exampleCategoryService"
  [items]="[{value:-1, text: 'value = -1'}]"
></input-select-api>
```

> `[item]` list dữ liệu cần chọn dạng `{value: 'giatri', text:'text hiển thị'}`
> list dữ liệu này sẽ được thêm vào đầu + list dữ liệu từ api trả về
>
> `apiService` control sẽ gọi hàm `getCombobox` trong service, do đó service phải được extents hàm `getComboBox` từ `baseService` hoặc khai báo hàm `getComboBox`
> > Kiểu dữ liệu trả về dạng `any`  tùy thuộc vào `value` trong `items`
---

9. ***input-select-multiple-api***

```html

<input-select-multiple-api
  placeholder="Nhập colSelectApiMultiple"
  formControlName="colSelectApiMultiple"
  [items]="[{value: -1, text: 'item 1'}]"
  [apiService]="exampleCategoryService"
>
</input-select-multiple-api>
```

> tương tự `input-select-api` nhưng được chọn nhiều
> Kiểu dữ liệu trả về dạng `any[]`  tùy thuộc vào `value` trong `items`
---

10. ***input-radio***

```html

<input-radio placeholder="Nhập colRadio"
             formControlName="colRadio"
             [items]="[{value:'1', text:'name 1'},{value:'2', text:'name 2'}]"
>
</input-radio>
```

> `[items]` Danh sách option dạng `{ value, text }`
> Kiểu dữ liệu trả về dạng `any` tùy thuộc vào `value` trong `items`
---

11. ***input-file***

```html

<input-file placeholder="Nhập colFile"
            formControlName="colFile"
            size="1"
>
</input-file>
```

> `size` là số file tối đa được phép chọn
> Kiểu dữ liệu trả về `string` dạng `'[{"fileNumber": "7d238020-cb5b-4c07-8f23-d8fc5ed0ab26","fileName": "1.jpg","fileSize": 563302,"fileExtension": ".jpg","fileUrl": "api/file/download/7d238020-cb5b-4c07-8f23-d8fc5ed0ab26"}]'`

11. ***input-textarea***

```html

<input-textarea placeholder="Nhập colLongText" formControlName="colTextArea"></input-textarea>
```

> tương tự `input-text`

II. **Button**

III. **Dialog**

1. *Mở dialog*

> b1: import module của dialog vào module page chính
>
> b2: code gọi mở dialog

```js
const dialog = this.dialogService.openDialog(options => {
  options.title = 'Example add';
  options.size = DialogSize.full;
  options.component = CrudDialogComponent;
  options.inputs = {};
}, (eventName, eventValue) => {
  if (eventName === 'onClose') {
    this.dialogService.closeDialogById(dialog.id);
  }
});
```

> nếu dialog bắn ra event `onClose` thì sẽ gọi service để close dialog đó theo id (Trường hợp có nhiều dialog)

> b4: trên dialog khai báo một event để bắn `onClose` ra ngoài

```js
@Output()
onClose = new EventEmitter < any > ();
```

> b5: khi muốn đóng dialog thì gọi

```js
this.onClose.emit();
```

> nếu muốn đẩy thêm data ra ngoài

```js
this.onClose.emit(dataOut);
```

> lúc này b2: `eventValue` sẽ nhận được dataOut
>
> Lưu ý: với dialog, thì form nào mở dialog thì form đó có nhiệm vụ gọi hàm `this.dialogService.closeDialogById(dialog.id)` để đóng

IV. Route

```js
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
      {
        path: 'private',
        canActivate: [AuthGuard],
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
      },
    ]
  }
];

export const LayoutRouting = RouterModule.forChild(routes);
```

> dùng `loadChildren` dể lazy load page, sẽ giảm tải quá trình load page

### .Net Core

***Mapping***

* MapTo
> Dùng khi muốn mapping 1 class vào entity
> 
> extend `IMapTo<Dao.Entities.Example>` (dành cho class request)

```java
public void Mapping(Profile profile)
  {
  profile.CreateMap<CreateExampleRequest, Dao.Entities.Example>()
  .ForMember(d=>d.ColSelectApiMultiple,o=>o.MapFrom(s=>new List<long>{1,2,3}));
  }
```

* MapFrom
> Dùng khi muốn mapping từ entity ra class
> 
> extend `IMapFrom<Dao.Entities.Example>` (dành cho response)

```java
public void Mapping(Profile profile)
  {
  profile.CreateMap<Dao.Entities.Example,FindOneExampleResponse>()
  .ForMember(d=>d.ColSelectApiMultiple,o=>o.MapFrom(s=>new List<long>{1,2,3}));
  }
```

I . **Insert**

```java
var user=_mapper.Map<Dao.Entities.User>(request);
  user.Password=Md5Generate.CreateMD5(user.Password);
  await _context.Users.AddAsync(user,cancellationToken);
  await _context.SaveChangesAsync(cancellationToken);
  return new CreateAccountCrudResponse();
```

II. **update**

```java
var user=await _context.Users.FindAsync(request.Id);

  if(request.UserName!=user.UserName&&await _context.Users.AnyAsync(x=>x.UserName==request.UserName))
  {
  //throw new ValidationException("ColText", "Tên đã bị trùng");
  }

  _context.Entry(user).CurrentValues.SetValues(request);
  await _context.SaveChangesAsync(cancellationToken);
  return new UpdateAccountCrudResponse()
  {
  Id=request.Id
  };
```

III. **Delete**

```java
var users=await _context.Users.Where(x=>request.Id.Contains(x.Id)).ToArrayAsync();
  _context.Users.RemoveRange(users);
  await _context.SaveChangesAsync(cancellationToken);
  return new DeleteAccountCrudResponse()
  {
  Id=request.Id
  };
```

IV. **FindOne**

```java
var user=await _context.Examples.FindAsync(request.Id);
  return _mapper.Map<FindOneExampleResponse>(user);
```

V. **Get Paging**

```java
var query=_context.Examples.AsQueryable();
  // where custom in here

  // where loopback default
  if(request.Where.HasValue())
  {
  query=query.WhereLoopback(request.WhereLoopBack);
  }

  // order by paging by lookback default
  if(request.Order.HasValue())
  {
  query=query.OrderByLoopback(request.OrderLoopBack);
  }

  return await query.ProjectTo<GetPaingExampleReponse>(_mapper.ConfigurationProvider)
  .ToPagedListAsync(request,cancellationToken);
```

VI. **Get ComboBox**

```java
var query=_context.ExampleCategories.AsQueryable();

  // where custom in here
  //query = query.Where(x => x.ServiceItemType.Any(s => s.ServiceCode == "M"));

  // where constain
  if(request.ValueSearch!=null&&request.ValueSearch.Length>0)
  {
  query=query.Where(x=>request.ValueSearch.Contains(x.Id));
  }


  if(request.TextSearch.HasValue())
  {
  var TextSearchToUpper=request.TextSearch.ToUnSign();
  query=query.Where(x=>x.Name.Contains(TextSearchToUpper));
  }

  // where loopback default
  if(request.Where.HasValue())
  {
  query=query.WhereLoopback(request.WhereLoopBack);
  }

  // order by paging by lookback default
  if(request.Order.HasValue())
  {
  query=query.OrderByLoopback(request.OrderLoopBack);
  }

  return await query.ProjectTo<ComboBoxExampleCategoryResponse>(_mapper.ConfigurationProvider)
  .ToPagedListAsync(request,cancellationToken);
```
