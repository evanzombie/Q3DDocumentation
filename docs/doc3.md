---
id: doc3
title: Gestures
---

# Mobile Device

# Namespace: InputPrism

InputPrism is the namespace for all Quantum3D user input capture classes. It covers hand gestures on the Mobile Phone or pressing down of an Apple pencil.

## Hands Gestures:

**Hands Gestures APIs:**

These are the APIs for hand gestures. The developers can capture the users' touches, and configure the response.

* Gestures.OnTap(Delegate method);
* Gestures.OnSwipe(Delegate method);
* Gestures.On9AxisSwipeLeft(Delegate method);
* Gestures.On9AxisSwipeRight(Delegate method);
* Gestures.On9AxisSwipeUp(Delegate method);
* Gestures.On9AxisSwipeDown(Delegate method);
* Gestures.WhilePinching(Delegate method);
* Gestures.WhileStretching(Delegate method);
* Gestures.WhileTwisting(Delegate method);

**Example**:

Initiate the Gestures Object by calling the API function. Then setup the delegate method. When a user taps the screen, the delegate method set by OnTap(delegate method) will be call, anything the developer puts inside this delegate method will be executed.

```
	void Awake () {
	// Don`t forget to add the namespace before the Gestures class
	InputPrism.Gestures.OnTap (tapped);
	}

	public void tapped() {
	// Do something here
	// Like: robotAnimation.SetTrigger (kick);
	}
```

## Stylus:

**Stylus APIs:**

Similar to Hands Gestures, Stylus has the same setup. Below are the APIs supported.

* Pointer.OnTap(Delegate method);
* Pointer.WhilePush(Delegate method);

**Example**:

The usage is just like Hands Gestures.

```
void Awake () {
// Don`t forget to add the namespace before the Gestures class
InputPrism.Pointer.WhilePressing (pressing);
}

public void pressing() {
// Do something here
// Like: robotAnimation.SetTrigger (crouch);
}
```
