void setup()
{
  Serial.begin(9600);

  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  if (digitalRead(2) == HIGH)
  {
    Message();
    digitalWrite(13, HIGH);

    while (digitalRead(2) == HIGH);
  }
  else
  {
    digitalWrite(13, LOW);
  }

  if (digitalRead(3) == HIGH)
  {
    Message1();

    while (digitalRead(3) == HIGH);
  }
}

void Message(void)
{
  Serial.print("AT\r\n");
  delay(500);

  Serial.print("AT+CMGF=1\r\n");
  delay(500);

  Serial.print("AT+CMGS=");
  delay(500);

  Serial.write('"');
  delay(500);

  Serial.print("YOUR_PHONE_NUMBER");
  delay(500);

  Serial.write('"');
  Serial.print("\r\n");
  delay(500);

  Serial.print("Unknown detected");
  delay(500);

  Serial.write(26);
}

void Message1(void)
{
  Serial.print("AT\r");
  delay(500);

  Serial.print("AT+CMGF=1\r");
  delay(500);

  Serial.print("AT+CMGS=");
  delay(500);

  Serial.write('"');
  delay(500);

  Serial.print("YOUR_PHONE_NUMBER");
  delay(500);

  Serial.write('"');
  Serial.print("\r");
  delay(500);

  Serial.print("Unknown detected");
  delay(500);

  Serial.write(26);
}
