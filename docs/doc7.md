---
id: doc7
title: Menu
---

## Standard UI:

The prefab contains a standard UI Menu with four buttons:

1. Input
2. Slider
3. Info
4. Quit

These buttons can be changed according to specific needs.
The Menu contains two functions to quit and load scene.

## Menu:

**Quit and load scenes:**

* Menu.LoadByIndex();
* Menu.ClickToQuit();

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Menu : MonoBehaviour {

	public void LoadByIndex(int sceneIndex)
	{
		SceneManager.LoadScene (sceneIndex);
	}

	public void ClickToQuit()
	{
		#if UNITY_EDITOR
		UnityEditor.EditorApplication.isPlaying = false;
		#else
		Application.Quit();
		#endif
	}
}
```

**How to use**:

Find the _Menu.prefab_ file in the Plugins folder, and drag it into your scene.

The prefab has added the Menu.cs component already. You just need to include the Menu.cs script inside your project.

The Input button will load the Input Scene, and the details will be explained in the next page.

The Slider button will show the audio page which is a template UI for adjusting audio using a slider.

The Info button will show the info page which contains a textarea to show text info.

![alt text](../img/menu.gif)

