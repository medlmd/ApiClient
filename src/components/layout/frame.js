<div>

<H1>
  نتشرف بانضمامك الينا
</H1>
<DivMobil>
  <form
    className="form-inside-input"
    onSubmit={this.onSubmit}
    noValidate
  >

    <Ul>
      <LiFirstMobile>
        <TextField style={{ width: "85%" }} type="text" name="firstname" required color="#232f3f" id="outlined-basic" placeholder="الإسم و اللقب" variant="outlined" />
        <br />
        {renderFnameValidationError}
      </LiFirstMobile>

      <LiMobil>

        <TextField style={{ width: "85%" }} required pattern="[0-9]{8}]" type="tel" name="tel" color="#232f3f" id="outlined-basic" placeholder="رقم الهاتف " variant="outlined" />
        <br />
        {renderFtelValidationError}
      </LiMobil>

      <LiMobil>
        <TextField style={{ width: "85%" }} type="text" name="password" required color="#232f3f" id="outlined-basic" placeholder="كلمة السر" variant="outlined" />
        <br />
        {renderFpassValidationError}

      </LiMobil>

      <LiMobil>
        <TextField style={{ width: "85%" }} type="text" name="password" required color="#232f3f" id="outlined-basic" placeholder="تأكيد كلمة السر" variant="outlined" />
        <br />
        {renderFpassValidationError}
        <br />
      </LiMobil>
      <LiButton>

        <LiAgree>
          <FormControlLabel

            value="start"
            control={<Radio color="primary" />}
            label="اوافق على الشروط والأحكام"
            labelPlacement="start"
          />
        </LiAgree>

      </LiButton>
    </Ul>


    <LiButton>

      <ColorButton type="submit" value="Submit" variant="contained" color="primary">
        إنشاء حساب
</ColorButton>
    </LiButton>

  </form>
</DivMobil>

</div>