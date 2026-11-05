# WebNa Android Build Guide (Codemagic & GitHub)

Your WebNa Browser project is now fully configured as a native Android application powered by Capacitor!

---

## 1. Project Android Structure

- **Capacitor Configuration**: `capacitor.config.ts` (configured with App ID `com.webna.browser` and App Name `WebNa`)
- **Native Android Project**: Located in `/android` (contains Gradle wrapper `./gradlew`, AndroidManifest, and native dependencies)
- **Codemagic CI/CD Automation**: `codemagic.yaml` is pre-configured at the root to automatically build your Android APK

---

## 2. How to Push Your Code to GitHub

Open your terminal or command prompt in this project folder and run:

```bash
# Initialize git if not already initialized
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: complete WebNa Android browser with Codemagic CI build"

# Set default branch to main
git branch -M main

# Add your GitHub repository remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git

# Push code to GitHub
git push -u origin main
```

---

## 3. How to Build Your Android App in Codemagic

1. **Sign in to Codemagic**:
   - Go to [https://codemagic.io](https://codemagic.io) and log in with your GitHub account.

2. **Add Your Application**:
   - Click **Add application**.
   - Select **GitHub** as the Git provider.
   - Choose your repository (`YOUR_REPOSITORY_NAME`).
   - For project type, select **Other / Custom**.

3. **Select the Workflow**:
   - Codemagic will automatically detect the `codemagic.yaml` file in your repository.
   - You will see the **WebNa Android App** workflow (`android-workflow`).

4. **Start the Build**:
   - Click **Start new build**.
   - Codemagic will automatically:
     1. Install dependencies (`npm install`)
     2. Compile Web assets (`npm run build`)
     3. Sync the Android project (`npx cap sync android`)
     4. Build the native Android APK (`./gradlew assembleDebug`)
   - Once the build finishes (usually 3–5 minutes), you can download the **`.apk`** file directly from the Codemagic build artifacts section, or receive it in your email!
