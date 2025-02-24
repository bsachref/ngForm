A powerful **dynamic form builder** for **Angular** using **default** **PrimeNG** or **Angular Material**, designed to create and manage forms dynamically from JSON without writing extra HTML.  

```md
---

## 🌟 Features  
✅ **Dynamic Form Rendering** – Create forms from JSON schema.  
✅ **PrimeNG and Angular Material Integration** – Works seamlessly with both PrimeNG and Angular Material components.  
✅ **Validation Support** – Built-in Angular validators.  
✅ **Custom Event Handling** – Easily handle form submissions.  
✅ **Customization** – Extendable to fit your needs.  

---

## 📦 Installation  

### 1️⃣ Install via NPM  
```sh
npm install @bsachref/ng-forms --save
```

### 2️⃣ Install Peer Dependencies  
Since this package relies on Angular and PrimeNG or Angular material, ensure they are installed:  

---

## 🚀 Quick Start  

### 2️⃣ Use in Component

Modify `app.component.ts`:  
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<your-dynamic-form [config]="formConfig" (formSubmit)="onSubmit($event)"></your-dynamic-form>`,
})
export class AppComponent {
    formControls: FormControlConfig[] = [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      uiFramework: 'primeng',
      validators: [
        { required: true },
        { minlength: 2 },
        { maxlength: 50 },
      ],
      class: 'firstname',
      style: { 'background-color': 'lightgray' },
      value: '',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      uiFramework: 'primeng',
      class: 'input-class',
      validators: [
        { required: true },
        { email: true },
      ],
      value: '',
    }
  ];

  onSubmit(formData: any) {
    console.log('Form Submitted:', formData);
  }
}
```

---

## 🛠 Available Form Controls  
| Type           | Description                                                               |
|----------------|---------------------------------------------------------------------------|
| `input`        | Basic text input (work with default and angular material)                 |
| `email`        | Email input (work with default and primeng)                               |
| `password`     | Password input  (work with default and primeng)                           |
| `select`       | Dropdown selection   (work with default, angular material and primeng)    |
| `checkbox`     | Toggle checkbox (work with default, angular material and primeng)         |
| `radio`        | Radio button group (work with default, angular material and primeng)      |
| `textarea`     | Multi-line text area (work with default, angular material and primeng)    |
| `datepicker`   | Angular material datepicker input                                         |
| `text`         | Primeng text input                                                        |
| `number`       | Primeng number input                                                      |
| `multi-select` | Primeng multi select input                                                |
| `date`         | Primeng date select                                                       |
| `toggle`       | Primeng toggle                                                            |
| `slider`       | Primeng slider                                                            |

> **Note:** The `primeng file` input is not currently supported in this version. It might be added in upcoming versions.
---

## 🔥 Full Example with Validations  

For a full example with validations, check out this [CodeSandbox](https://codesandbox.io/p/devbox/g8jy7t).
```md
```


---

## 📖 Documentation  
For full documentation, visit [GitHub](https://github.com/bsachref/ngForm).  

---

## 🏆 Support & Contributions  
If you love this project, consider supporting me:  
- ☕ [Buy Me a Coffee](https://buymeacoffee.com/bsachref)  
- 💖 [Sponsor on GitHub](https://github.com/sponsors/bsachref)  
- ⭐ [Star this repo](https://github.com/bsachref/ngForm)  

---

## 🚀 Contributing  
1. Fork the repository.  
2. Clone your fork:  
   ```sh
   git clone https://github.com/bsachref/ngForm.git
   ```
3. Create a feature branch:  
   ```sh
   git checkout -b feature-new-component
   ```
4. Commit your changes and push:  
   ```sh
   git commit -m "Added new component"  
   git push origin feature-new-component
   ```
5. Submit a Pull Request.  

---

## 📝 License  
MIT © 2025 BOUSNINA Achraf  
```