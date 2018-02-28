---
id: doc6
title: Alert and Dialog Boxes
---

# Toggle: 

The toggle function 

## Hands Gestures:

**Hands Gestures APIs:**

These are the APIs for hand gestures. The developers can capture the users' touches, and configure the response.

- Gestures.OnTap(Delegate method);
- Gestures.OnSwipe(Delegate method);
- Gestures.On9AxisSwipeLeft(Delegate method);
- Gestures.On9AxisSwipeRight(Delegate method);
- Gestures.On9AxisSwipeUp(Delegate method);
- Gestures.On9AxisSwipeDown(Delegate method);
- Gestures.WhilePinching(Delegate method);
- Gestures.WhileStretching(Delegate method);
- Gestures.WhileTwisting(Delegate method);

**Example**:

Initiate the Gestures Object by calling the API function. Then setup the delegate method. When a user taps the screen, the delegate method set by OnTap(delegate method) will be call, anything the developer puts inside this delegate method will be executed.

~~~~
public GameObject Panel; 

	//Hide Alert
	public void HideAlert()
	{
		Panel.gameObject.SetActive (false);
	}

	//Show Alert
	public void ShowAlert()
	{
		Panel.gameObject.SetActive (true);
	}

	//Show or hide according to status 
	public void ToggleAlert()
	{
		Panel.SetActive(!Panel.activeSelf);
	}
~~~~

## Stylus:
**Stylus APIs:**

Similar to Hands Gestures, Stylus has the same setup. Below are the APIs supported.

- Pointer.OnTap(Delegate method);
- Pointer.WhilePush(Delegate method);

**Example**:

The usage is just like Hands Gestures.
~~~~
void Awake () {
// Don`t forget to add the namespace before the Gestures class
InputPrism.Pointer.WhilePressing (pressing);
}

public void pressing() {
// Do something here
// Like: robotAnimation.SetTrigger (crouch);
}
~~~~
