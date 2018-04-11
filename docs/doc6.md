---
id: doc6
title: Alert and Info Boxes
---

## Standard UI:

The prefab contains two standard UI boxes:

1. Alert Box
2. Info Box

## Toggle:

The toggle function is used to handle display and hide in the user iterface.

**Display and Hide:**

* AlertBox.ShowAlert();
* AlertBox.HideAlert();
* AlertBox.ToggleAlert();

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

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
```

**How to use**:

Find the _AlertBox.prefab_ file in the Plugins folder, and drag it into your scene. By adjusting the scale settings inside Inspector, your will get the standard alert box.

The prefab has added the AlertBox.cs component already. You just need to include the AlertBox.cs script inside your project.

![alt text](../img/alertbox01.gif)

## Drag:

The drag function is used to handle window dragging.

**Drag and StickToWindow:**

* AlertDrag.OnDrag(PointerEventData data);
* AlertDrag.StickToWindow();

```
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections;

public void OnDrag (PointerEventData data) {
		if (panelRectTransform == null)
			return;

		Vector2 localPointerPosition;
		if (RectTransformUtility.ScreenPointToLocalPointInRectangle (canvasRectTransform, data.position, data.pressEventCamera, out localPointerPosition)) {
			Vector3 offsetToOriginal = localPointerPosition - pointerOffset;
			panelRectTransform.localPosition = localPointerPosition - pointerOffset;
		}

		// Stick panel to area of parent
		StickToWindow ();
	}

// The AlertDrag.StickToWindow() function will make your boxes stick to a predefined area limit.
	void StickToWindow () {
		Vector3 pos = panelRectTransform.localPosition;

		Vector3 minPosition = canvasRectTransform.rect.min - panelRectTransform.rect.min;
		Vector3 maxPosition = canvasRectTransform.rect.max - panelRectTransform.rect.max;

		pos.x = Mathf.Clamp (panelRectTransform.localPosition.x, minPosition.x, maxPosition.x);
		pos.y = Mathf.Clamp (panelRectTransform.localPosition.y, minPosition.y, maxPosition.y);

		panelRectTransform.localPosition = pos;
	}
```

**How to use**:

Find the _InfoBox.prefab_ file in the Plugins folder, and drag it into your scene. By adjusting the scale settings inside Inspector, your will get the standard info box.

The prefab has added the AlertDrag.cs component already. You just need to include the AlertDrag.cs script inside your project.

![alt text](../img/alertbox02.gif)
