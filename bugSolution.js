To solve this issue, we can use the `windowSize` and `initialNumToRender` props of the FlatList component. These props control how many items are rendered at once, improving performance with large datasets.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  windowSize={10} // Render 10 items at a time
  initialNumToRender={10} // Initially render 10 items
  getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })} //Optional: For further optimization
/>
```

Additionally, consider using `removeClippedSubviews={true}` to improve performance by removing items that are off-screen. However, use this with caution as it can cause issues with animations or certain item interactions.

Remember to replace `ITEM_HEIGHT` with the actual height of your list items.  Further performance optimization can be achieved by optimizing the `ItemComponent` and using techniques like memoization to prevent unnecessary re-renders.