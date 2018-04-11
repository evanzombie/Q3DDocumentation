---
id: doc8
title: Text Input
---

## Input:

The prefab contains a standard UI input area.

**Get Value, Set Value and Set Placeholder:**

* InputBehaviour.GetValue();
* InputBehaviour.SetValue();
* InputBehaviour.SetPlaceholder();

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class InputBehaviour : MonoBehaviour {

	public InputField myInput;

	//Set input field place holder value
	public void SetPlaceholder()
	{
		myInput = this.GetComponent<InputField> ();
		myInput.placeholder.GetComponent<Text>().text =  "Enter Your Placeholder Text Here";
	}

	//Get the value in Input Field and print it out using PrintValue()
	public void GetValue(){
		myInput.onValueChanged.AddListener(PrintValue);
	}
	private void PrintValue(string value)
	{
		Debug.Log(value);
	}

	//Set the value for input field
	public void SetValue(){
		myInput = this.GetComponent<InputField> ();
		myInput.text = "Set Value Here";
	}


	void Start ()
	{
		//Set input filed placeholder
		SetPlaceholder ();

		//Get input field value
		GetValue();

		//Set input field value
		SetValue ();
	}
}
```

**How to use**:

Find the _Input.prefab_ file in the Plugins folder, and drag it into your scene.

The prefab has added the InputBehaviour.cs component already. You just need to include the InputBehaviour.cs script inside your project.

![alt text](../img/input.gif)
 
