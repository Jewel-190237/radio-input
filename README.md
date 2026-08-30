# Radio Input - Custom React Radio Button Component

A custom radio button component built with React and CSS. Features customizable styling, accessibility, and smooth animations.

## Features

- Custom radio button styling
- Smooth animations
- Accessibility support
- Keyboard navigation
- Customizable appearance
- Group selection
- Responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/radio-input.git
   ```

2. Copy `radio.tsx` and `global.css` into your project

3. Import and use the component:
   ```tsx
   import Radio from './radio';

   function App() {
     return (
       <Radio.Group name="option" onChange={(value) => console.log(value)}>
         <Radio value="option1">Option 1</Radio>
         <Radio value="option2">Option 2</Radio>
         <Radio value="option3">Option 3</Radio>
       </Radio.Group>
     );
   }
   ```

## Usage

### Basic Usage
```tsx
import Radio from './radio';

function App() {
  const handleChange = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <Radio.Group name="options" onChange={handleChange}>
      <Radio value="yes">Yes</Radio>
      <Radio value="no">No</Radio>
      <Radio value="maybe">Maybe</Radio>
    </Radio.Group>
  );
}
```

### Custom Styling
```css
/* Override default styles */
.radio-input {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
}

.radio-input:checked {
  border-color: #007bff;
}

.radio-input::after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #007bff;
  transform: scale(0);
  transition: transform 0.2s;
}

.radio-input:checked::after {
  transform: scale(1);
}
```

### Disabled State
```tsx
<Radio value="disabled" disabled>Disabled Option</Radio>
```

## Props

### Radio.Group
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | Group name for radios |
| onChange | function | - | Selection change handler |
| value | string | - | Controlled value |

### Radio
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Radio value |
| disabled | boolean | false | Disabled state |
| children | node | - | Label content |

## Features in Detail

### Custom Styling
- Fully customizable appearance
- CSS-based animations
- Support for different sizes and colors

### Accessibility
- Proper ARIA attributes
- Keyboard navigation
- Screen reader support

### Animations
- Smooth selection transitions
- Hover effects
- Focus indicators

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
