$(function () {
    $('#ProcessPageEdit').submit(function(e) {
        if ('sms77_sms_user' !== this.elements.namedItem('_after_submit_action').value)
            return;

        e.preventDefault();

        var $text = this.elements.namedItem('sms77_text');
        $text.value = prompt(ProcessWire.config.Sms77.prompt_text);

        if ($text.value) this.submit();
        else alert(ProcessWire.config.Sms77.text_missing);
    });
});
