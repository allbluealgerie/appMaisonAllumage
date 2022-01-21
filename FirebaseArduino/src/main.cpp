
#if defined(ESP32)
#include <WiFi.h>
#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

#define WIFI_SSID "LAALAOUI"
#define WIFI_PASSWORD "@BOMbar799"

/* firebase info */
#define API_KEY "API_KEY"
#define DATABASE_URL "URL"
#define USER_EMAIL "USER_EMAIL"
#define USER_PASSWORD "USER_PASSWORD"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
unsigned long sendDataPrevMillis = 0;
unsigned long count = 0;

void setup()
{
  Serial.begin(115200);

  /*connect to wifi */
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
}

void loop()
{
  // put your main code here, to run repeatedly:
}