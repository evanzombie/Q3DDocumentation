---
id: doc6
title: Alert and Dialog Boxes
---

## Toggle: 

The toggle function is used to handle display and hide in the user iterface.

**Display and Hide:**

- AlertBox.ShowAlert();
- AlertBox.HideAlert();
- AlertBox.ToggleAlert(); 

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

~~~~
public class AlertBox : MonoBehaviour 
{
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
}
~~~~
 

**Example**:

Initiate the Gestures Object by calling the API function. Then setup the delegate method. When a user taps the screen, the delegate method set by OnTap(delegate method) will be call, anything the developer puts inside this delegate method will be executed.

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
