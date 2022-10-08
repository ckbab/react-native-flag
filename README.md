# react-native-flag

React Native component for country flags.

## Installation

```
yarn add @ckbab/react-native-flag
```

This package depends on `react-native-svg` so you need to install it as well.

## Usage

```js
import Flag from "@ckbab/react-native-flag";

// Use country codes such as "SE", "GB", "DK"...

<Flag code="SE" />

<Flag code="SE" size={48} />
```

## Properties

| Name    | Type         | Default value |
| ------- | ------------ | ------------- |
| `code`  | `string`     | -             |
| `size`  | `number`     | 32            |
| `style` | `StyleSheet` | -             |
