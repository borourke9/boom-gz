# 3D Logo Setup Instructions

## Adding Your GLB File

1. **Place your GLB file** in the `public` directory:
   ```
   boom-gz/public/logo.glb
   ```

2. **File requirements**:
   - Format: GLB (binary glTF)
   - Recommended size: Under 5MB for optimal loading
   - Optimize your model for web use if possible

## Current Implementation

The 3D logo is now integrated into the hero section of your landing page with:

- **Auto-rotation**: Slow, smooth rotation for visual appeal
- **Responsive sizing**: Scales appropriately on different screen sizes
- **Fallback**: Shows a placeholder while loading
- **Performance**: Uses React Three Fiber for optimal rendering

## Customization Options

You can modify the 3D logo behavior by editing the `Logo3DCanvas` component in the hero section:

```tsx
<Logo3DCanvas
  className="w-full h-full"
  scale={1}                    // Size multiplier
  position={[0, 0, 0]}         // X, Y, Z position
  rotation={[0, 0, 0]}         // X, Y, Z rotation
  autoRotate={true}            // Enable/disable auto-rotation
  rotationSpeed={0.005}        // Rotation speed (lower = slower)
  enableControls={false}       // Enable mouse controls
  enableEnvironment={true}     // Enable lighting environment
/>
```

## Troubleshooting

- **Model not loading**: Check that `logo.glb` is in the `public` directory
- **Performance issues**: Try reducing the model complexity or file size
- **Loading errors**: Ensure the GLB file is valid and not corrupted

## Next Steps

1. Add your `logo.glb` file to `public/logo.glb`
2. Test the implementation by running `npm run dev`
3. Adjust the positioning, rotation, or scale as needed
4. Commit your changes to git

The 3D logo will appear above the "NEXGEN" text in the hero section with a smooth auto-rotation effect.
