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
	void Awake () {
	// Don`t forget to add the namespace before the Gestures class
	InputPrism.Gestures.OnTap (tapped);
	}

	public void tapped() {
	// Do something here
	// Like: robotAnimation.SetTrigger (kick);
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

# Hololens

Our Hololens toolkit covers all foundation features that currently present on Hololens. We also provide a fully functional show case scene.
If you are new to Hololens, we recommend you start from the example Hololens scene as it is a working scene and also a template. We have done the foundation setup, you can edit the template and expand it to a be your final product.
If you have imported our UX Subsystem package into your project, you are ready to dive in the Guide.

## Unity Project Setup:

**Building Settings**:
- File > Build Settings
- Platform: UWP or Windows Store
  Note: After you select a Platform, remember to hit Switch Platform
- Build Type: D3D
- Build and Run on Local Machine

**Player Settings**:
- Under Build Settings panel, click Player Settings
  (The Player Settings panel can be found on the Inspector Panel)
- Select Windows Store icon
- Expand XR Settings Group
- In the Rendering section, check the Virtual Reality Supported checkbox to add a new Virtual Reality SDKs list
- Verify that Windows Mixed Reality appears in the list. If not, select the + button at the bottom of the list and choose Windows Holographic
- Go to Edit > Project Settings > Quality
- Click on downward pointing arrow in the Default row under the Windows Store icon.
- Select Very Low for Windows Store Apps.
- In the Publishing Settings, Capabilities section, check the Microphone capability.

## Run The Example Scene:
- In your project panel, look for the example Hololens scene under this path:
  Assets/Examples/HololensScenes/Hololens
- Hit "play", and watch what this scene looks like.

## Build this App into you Hololens:
**Build and Run**:
- Build Setting > Build
- When Unity done building it, you can see your Visual Studio Solution you’ve created, open this folder, and open the .sln file, which is the entry of your project.
- In Visual Studio, right click on Package.appxmanifest in the Solution Explorer and select View Code
- Find the line specifying TargetDeviceFamily and change Name="Windows.Universal" to Name="Windows.Holographic".
- Save the Package.appxmanifest.
- Using the top toolbar in Visual Studio, change the target from Debug to Release and from ARM to x86.
- Click on the drop down arrow next to the Device button, and select Remote Machine.
- Enter your device IP address and set Authentication Mode to Universal (Unencrypted Protocol). Click Select. If you do not know your device IP address, look in Settings > Network & Internet > Advanced Options.
- In the top menu bar, click Debug -> Start Without debugging or press Ctrl + F5. If this is the first time deploying to your device, you will need to pair it with Visual Studio.
- When the app has deployed, dismiss the Fitbox with a select gesture.

**Try the gazing support**:
- Try gazing an object. You should see the object being highlighted.
- When you are not gazing at the holograms, a directional indication will show up.
- Wherever you move, the AstroMan will always face you.

**Try all the hand gestures**:
- When your hand is being tracked, the cursor will be a circle instead of a dot.
- When you tap&hold on the AstroMan, you should be able to see a panel, then move the AstroMan to the direction you drag.

**Try the voice input by doing**:
- Gaze at the astronaut's watch and say "Open Communicator" to show the communicator.
- Press the Record button (microphone) to start recording a verbal message for the astronaut.
- Start speaking, and verify that the wave animation plays on the communicator, which provides feedback to the user that their voice is heard.
- Press the Stop button (left square), and verify that the wave animation stops running.
- Press the Play button (right triangle) to play back the recorded message and hear it on the device.
- Press the Stop button (right square) to stop playback of the recorded message.
- Say "Send Message" to close the communicator and receive a 'Message Received' response from the astronaut.


## API Guide:
Due to the complicated nature of a Hololens project, we are using an object-based development support. It means there is no methods for you to call, but classes with functionalities you can inherit and modify.
**Quantum3D Hololens support environment setup**:
For Hand Gestures:
- GazeManager.cs is our events listeners and controller. You can just search them in the project panel and drag them to an Empty Game Object.
- Do the same with GazeStabilizer.cs, GestureManager.cs, InteractibleManager.cs, HandGuidance.cs and HandsManager.cs
For Voice Input:
- KeywordManager.cs is responsible for the voice input environment setup. You can just search it in the project panel and drag it to an Empty Game Object.


**Basic Prefabs**:
- Main Camera.prefab is a Hololens Standard prefab. It is pre-setup, you can just replace the original Unity Main Camera with this one.
- Lights.prefab is a Hololens Standard prefab. It is pre-setup, you can just replace the original Unity Main Camera with this one.
- The Cursor.prefab is a Hololens Standard prefab. It moves to where the users gaze at and provides hands detection and manipulation indication.
  CursorManager.cs and CursorFeedback.cs are the components for this prefab. If you find that the cursor do not have them attached, just search them in the project panel and drag to the Cursor.

**Key Classes for hand gestures**:
- CursorManager.cs is the script that controll the Cursor\`s position. It is achieved by monitoring the GazeManager\`s Hit and position properties.
- CursorFeedback.cs is the script that controll the Cursor\`s hand detection indicator. It is achieved by monitoring HandsManager\`s HandDetected property.
- GestureAction.cs is the script that controll the AstroMan\`s facing direction and position. Facing direction is achieved by monitoring the GestureManager\`s NavigationPosition. Postion is achieved by receiving the message from the ManipulationStart\`s recognizer\`s. The position is given by the message.
- Interactible.cs is a GameObject script. If a GameObject is attached with this script, when it\`s being gazed, it will highlight itself. 

**Key Classes for voice input**:
- KeywordManager.cs is the keyword recognizer. Click the GameObject where the KeywordManager has been attached to. Find the Keyword Manager section, and click the Keywords And Responses dropdown. You will see a Keyword is already set there: "Open Communicator". By doing the same, you can define your own voice input.

# Convinient codelets:
## Camera Zoom In & Out
~~~~
// If the camera is orthographic...
/**
		var orthographicSize : float
		Description
		Camera's half-size when in orthographic mode.

		This is half of the vertical size of the viewing volume. Horizontal viewing size varies depending on viewport's aspect ratio. Orthographic size is ignored when camera is not orthographic
**/
if (camera.isOrthoGraphic)
{
    camera.orthographicSize += deltaMagnitudeDiff * orthoZoomSpeed;

   	// Make sure the orthographic size never drops below zero.
  	camera.orthographicSize = Mathf.Max(camera.orthographicSize, 0.1f);
}
/**
		var fieldOfView : float
		Description
		The field of view of the camera in degrees.

		This is the vertical field of view; horizontal FOV varies depending on the viewport's aspect ratio. Field of view is ignored when camera is orthographic
**/
else
{
    camera.fieldOfView += deltaMagnitudeDiff * perspectiveZoomSpeed;

   	// Clamp the field of view to make sure it's between 0 and 180.
   	camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, 0.1f, 179.9f);
}
~~~~
