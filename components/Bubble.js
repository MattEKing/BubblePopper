/**
 * Bubble Component
 * 
 * Renders a circular bubble for the Bubble Popper game.
 * Each bubble has a position (x, y) and size (radius).
 * 
 * CURRENT IMPLEMENTATION:
 * - Simple green circle with drop shadow
 * - Fixed radius (typically 30)
 * - Absolute positioning
 * 
 * ============== STUDENT EXTENSION IDEAS ==============
 * Consider enhancing this component with:
 * 1. Different bubble types/colors
 * 2. Animation effects (pulsing, rotation)
 * 3. Pop animation when hit by laser
 * 4. Special power-up bubbles
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Bubble component for the Bubble Popper game
 * 
 * @param {Object} props - Component properties
 * @param {number} props.x - X coordinate of the bubble
 * @param {number} props.y - Y coordinate of the bubble
 * @param {number} props.radius - Radius of the bubble
 * @returns {React.Component} Rendered bubble
 */
export default function Bubble({ x, y, radius }) {
  return (
    <View
      style={[
        styles.bubble,
        {
          left: x,
          top: y,
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
        },
      ]}
      >
    <View
    style={[
      styles.shine,
      {
        width: radius * 0.8,
        height: radius * 0.8,
        borderRadius: radius * 0.4,
      },
    ]}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(65, 178, 182, 0.8)',
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1.5,
    borderColor: '#ffffffaa',
  },
  shine: {
  position: 'absolute',
  top: '15%',
  left: '15%',
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  }
});
