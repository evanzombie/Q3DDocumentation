---
id: doc_progressbar
title: Progress Bar
---

## Progress Bar:

The ProgressBar prefab contains a circular progress bar. In the example scene, it is utilized for indicating the progress of loading a target scene, which is the Menu scene from previous page.

* **ProgressBar.cs**

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ProgressBar : MonoBehaviour {

	private Image fillImage;
	private Text textLabel;
	private float value = 0f;
	private bool isDone = false;

	void Awake()
	{
		this.fillImage = this.transform.Find ("Fill").GetComponent<Image> ();
		this.textLabel = this.transform.Find ("Text").GetComponent<Text> ();
	}

	// Use this for initialization
	void Start () {
		this.fillImage.fillAmount = 0f;
	}

	// Update is called once per frame
	void Update () {
		if (this.isDone) {
			if (this.OnDoneEvent != null)
				this.OnDoneEvent ();

			this.OnDoneEvent = null;
			this.OnChangeEvent = null;
			return;
		}

		if (this.OnChangeEvent != null)
  			this.OnChangeEvent ((int)(this.value * 100));


		this.fillImage.fillAmount = this.value;
		this.textLabel.text = (this.value >= 1) ? "Done!" : (int)(this.value * 100) + "%";
		this.isDone = (this.value >= 1) ? true : false;
	}

	#region Get and Set

	public void SetValue(float value){
		this.value = value;
	}

	public float GetValue(){
		return this.value;
	}

	#endregion
	#region Events

	public void OnChange(ValueChange method){
		this.OnChangeEvent += method;
	}
	public void OnDone(ProgressDone method){
		this.OnDoneEvent += method;
	}

	public delegate void ValueChange(float value);
	private event ValueChange OnChangeEvent;

	public delegate void ProgressDone();
	private event ProgressDone OnDoneEvent;

	#endregion
}
```

* **LoadScene.cs**

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class LoadScene : MonoBehaviour {

	public ProgressBar radialBar;
	private AsyncOperation asyncLoad;

	public string sceneToLoad;

	// Use this for initialization
	void Start () {
		radialBar.OnChange (this.OnRadialBarChange);
		radialBar.OnDone (this.onRadialBarDone);
		StartCoroutine (this.LoadAsyncScene ());
	}

	// Update is called once per frame
	void Update () {

	}

	void OnRadialBarChange(float value)
	{
		print ("Loading progress is " + value);
	}

	void onRadialBarDone()
	{
		print ("Loading is done");
		asyncLoad.allowSceneActivation = true;
	}

	IEnumerator LoadAsyncScene(){
		asyncLoad = SceneManager.LoadSceneAsync (this.sceneToLoad);
		asyncLoad.allowSceneActivation = false;

		while (!asyncLoad.isDone) {
			radialBar.SetValue (Mathf.Clamp01 (asyncLoad.progress / 0.9f));
			yield return null;
		}
	}
}
```

**How to use**:

Find and open the _Progressbar_ scene file in the Plugins folder.

First, type the name of the target scene into the Scene To Load settings in the inspector.

![alt text](../img/loadscene1.jpeg)

Next, In the build settings you need to set the order and target scene.

![alt text](../img/loadscene2.jpeg)

Run the project and the progress bar will run from 0% to 100% indicating the progress of loading the target scene.

![alt text](../img/progressbar.gif)
