/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.de",{"vs/languages/html/common/htmlTags":["Das html-Element stellt den Stamm eines HTML-Dokuments dar.","Das head-Element stellt eine Sammlung von Metadaten für das Dokument dar.","Das title-Element stellt den Titel oder Namen des Dokuments dar. Autoren sollten Titel verwenden, die ihre Dokumente selbst dann identifizieren, wenn sie außerhalb des Kontexts verwendet werden, z. B. im Verlauf oder den Lesezeichen eines Benutzers oder in Suchergebnissen. Der Titel eines Dokuments unterscheidet sich häufig von seiner ersten Überschrift, da die erste Überschrift außerhalb des Kontexts nicht eigenständig sein muss.","Das base-Element ermöglicht Autoren das Angeben der Dokumentbasis-URL zum Auflösen relativer URLs sowie des Namens des Standardbrowserkontexts zum Folgen von Links. Das Element stellt keinen Inhalt dar, der über diese Informationen hinausgeht.","Das link-Element ermöglicht Autoren das Verknüpfen Ihres Dokuments mit anderen Ressourcen.","Das meta-Element stellt verschiedene Typen von Metadaten dar, die nicht mithilfe der title-, base-, link-, style- und script-Elemente ausgedrückt werden können.","Das style-Element ermöglicht Autoren das Einbetten von Formatierungsinformationen in ihre Dokumente. Das style-Element ist eine von mehreren Eingaben für das Formatierungsverarbeitungsmodell. Das Element stellt keinen Inhalt für den Benutzer dar.","Das body-Element stellt den Inhalt des Dokuments dar.","Das article-Element stellt eine vollständige (oder eigenständige) Komposition in einem Dokument, auf einer Seite, in einer Anwendung oder auf einer Website dar, die im Prinzip unabhängig verteilt oder erneut verwendet werden kann, z. B. bei der Veröffentlichung. Dabei kann es sich um einen Beitrag in einem Forum, in einem Magazin oder um einen Zeitungsartikel, einen Blogeintrag, ein von einem Benutzer übermittelten Kommentar, ein interaktives Widget oder Gadget oder um ein beliebiges anderes unabhängiges Inhaltselement handeln. Jedes article-Element sollte identifiziert werden. Dies geschieht normalerweise durch eine Überschrift (h1- bis h6-Element) als untergeordnetes Element eines article-Elements.","Das section-Element stellt einen generischen Abschnitt eines Dokuments oder einer Anwendung dar. Ein Abschnitt ist in diesem Kontext eine thematische Gruppierung von Inhalten. Das Thema jedes Abschnitts sollte identifiziert werden – normalerweise durch Einschließen einer Überschrift (h1- bis h6-Element) als untergeordnetes Element des section-Elements.","Das nav-Element stellt einen Abschnitt einer Seite dar, der mit anderen Seiten oder mit Parts innerhalb der Seite verknüpft ist: ein Abschnitt mit Navigationslinks.","Das aside-Element stellt einen Abschnitt einer Seite dar, der aus Inhalt besteht, der indirekt mit dem Inhalt um das aside-Element in Beziehung steht, und der als separat von diesem Inhalt betrachtet werden kann. Solche Abschnitte werden in Druckerzeugnissen häufig in einem Kasten dargestellt.","Das h1-Element stellt eine Abschnittsüberschrift dar.","Das h2-Element stellt eine Abschnittsüberschrift dar.","Das h3-Element stellt eine Abschnittsüberschrift dar.","Das h4-Element stellt eine Abschnittsüberschrift dar.","Das h5-Element stellt eine Abschnittsüberschrift dar.","Das h6-Element stellt eine Abschnittsüberschrift dar.","Das header-Element stellt einführenden Inhalt für seinen nächsten Vorgänger mit unterteilendem Inhalt oder das unterteilende Stammelement dar. Ein header-Element enthält normalerweise eine Gruppe von Einführungs- oder Navigationshilfen. Wenn der nächste Vorgänger mit unterteilendem Inhalt oder das unterteilende Stammelement das body-Element ist, gilt es für die ganze Seite.","Das footer-Element stellt eine Fußzeile für seinen nächsten Vorgänger mit unterteilendem Inhalt oder das unterteilende Stammelement dar. Ein footer-Element enthält normalerweise Informationen zu seinem Abschnitt, z. B. zum Autor, Links zu verwandten Dokumenten, Copyrightinformationen usw.","Das address-Element stellt die Kontaktinformationen für seinen nächsten Artikel oder body-Element-Vorgänger dar. Wenn es sich um das body-Element handelt, gelten die Kontaktinformationen für das gesamte Dokument.","Das p-Element stellt einen Absatz dar.","Das hr-Element stellt einen Themawechsel auf Absatzebene (z. B. den Wechsel des Handlungsorts in einer Geschichte) oder den Übergang in ein anderes Thema innerhalb eines Abschnitts eines Referenzdokuments dar.","Das pre-Element stellt einen Block von vorformatiertem Text dar, in dem die Struktur durch typografische Konventionen und nicht durch Elemente dargestellt wird.","Das blockquote-Element stellt Inhalt dar, der aus einer anderen Quelle zitiert wird, optional mit einem Zitat, das sich in einem footer- oder cite-Element befinden muss, und optional mit Inlineänderungen (z. B. Anmerkungen und Abkürzungen).","Das ol-Element stellt eine Liste mit Elementen dar. Dabei wurden die Elemente bewusst so sortiert, dass eine Änderung der Reihenfolge die Bedeutung des Dokuments ändern würde.","Das ul-Element stellt eine Liste von Elementen dar. Dabei ist die Reihenfolge der Elemente unwichtig – eine Änderung der Reihenfolge würde die Bedeutung des Dokuments nicht wesentlich ändern.","Das li-Element stellt ein Listenelement dar. Wenn sein übergeordnetes Element ein ol-, ul- oder menu-Element ist, ist das Element ein Element der Liste des übergeordneten Elements wie für diese Elemente definiert. Andernfalls besitzt das Listenelement keine definierte listenbezogene Beziehung zu einem anderen li-Element.","Das dl-Element stellt eine Zuordnungsliste dar, die aus mindestens null Name-Wert-Gruppen (einer Beschreibungsliste) besteht. Eine Name-Wert-Gruppe besteht aus mindestens einem Namen (dt-Elemente), gefolgt von mindestens einem Wert (dd-Elemente). Dabei werden alle anderen Knoten als dt- und dd-Elemente ignoriert. In einem einzelnen dl-Element sollten nicht mehrere dt-Elemente für jeden Namen vorhanden sein.","Das dt-Element stellt den Ausdrucksteil (oder Namensteil) einer Ausdrucks-Beschreibungs-Gruppe in einer Beschreibungsliste (dl-Element) dar.","Das dd-Element stellt den Beschreibungs-, Definitions- oder Wertteil einer Ausdrucks-Beschreibungs-Gruppe in einer Beschreibungsliste (dl-Element) dar.","Das figure-Element stellt Flussinhalt (optional mit einem Titel) dar, der eigenständig ist (wie ein vollständiger Satz) und auf den normalerweise aus dem Hauptfluss des Dokuments als einzelne Einheit verwiesen wird.","Das figcaption-Element stellt einen Titel oder eine Legende für den restlichen Inhalt des übergeordneten figure-Elements des figcaption-Elements dar (wenn vorhanden).","Das main-Element stellt den Hauptinhalt des Textkörpers eines Dokuments oder einer Anwendung dar. Der Hauptinhaltsbereich besteht aus Inhalt, der sich unmittelbar auf das zentrale Thema eines Dokuments oder die zentrale Funktion einer Anwendung bezieht oder diese(s) erweitert.","Das div-Element besitzt keine besondere Bedeutung. Es stellt seine untergeordneten Elemente dar. Es kann mit den class-, lang- und title-Attributen als Markup für Semantik verwendet werden, die einer Gruppe aufeinanderfolgender Elemente gemeinsam ist.","Wenn das a-Element ein href-Attribut besitzt, stellt es einen Link (einen Hypertextanker) dar, der durch seinen Inhalt bezeichnet wird.","Das em-Element stellt eine Hervorhebung seiner Inhalte dar.","Das strong-Element stellt hohe Wichtigkeit, große Bedeutung oder Dringlichkeit seiner Inhalte dar.","Das small-Element stellt seitliche Kommentare dar, z. B. mit einem kleinen Schriftgrad.","Das s-Element stellt Inhalte dar, die nicht mehr richtig oder nicht mehr relevant sind.","Das cite-Element stellt einen Verweis auf eine kreative Arbeit dar. Es muss den Titel der Arbeit oder den Namen des Autors (Person, Personen oder Organisation) oder einen URL-Verweis umfassen, der in abgekürzter Form gemäß den Konventionen vorliegen kann, die für die Hinzufügung von Zitatmetadaten verwendet werden.","Das q-Element stellt Formulierungsinhalt dar, der aus einer anderen Quelle zitiert wird.","Das dfn-Element stellt die definierende Instanz eines Ausdrucks dar. Der Absatz, die Beschreibungslistengruppe oder der Abschnitt, der bzw. die der nächste Vorgänger des dfn-Elements ist, muss außerdem die Definition(en) für den durch das dfn-Element angegebenen Ausdruck enthalten.","Das abbr-Element stellt eine Abkürzung oder ein Akronym dar, optional mit der entsprechenden Erweiterung. Das title-Attribut kann zum Bereitstellen einer Erweiterung der Abkürzung verwendet werden. Das Attribut muss (wenn es angegeben wird) eine Erweiterung der Abkürzung und darf nichts anderes enthalten.",'Das ruby-Element ermöglicht, dass mindestens ein Bereich von Formulierungsinhalt mit Ruby-Anmerkungen markiert wird. Ruby-Anmerkungen sind kurze Texte, die neben dem Basistext angezeigt werden. Sie werden hauptsächlich in ostasiatischer Typografie als Hinweise für die Aussprache verwendet oder enthalten andere Anmerkungen. Im Japanischen wird diese Form der Typografie als Furigana bezeichnet. Ruby-Text kann auf jeder Seite (manchmal auch auf beiden Seiten) des Basistexts angezeigt werden, und seine Position kann mithilfe von CSS gesteuert werden. Eine umfassendere Einführung in Ruby finden Sie in den Anwendungsfällen, im Dokument "Exploratory Approaches for Ruby Markup" sowie in "CSS Ruby Module Level 1". [RUBY-UC] [CSSRUBY]',"Das rb-Element markiert die Basistextkomponente einer Ruby-Anmerkung. Wenn es sich um ein untergeordnetes Element eines Ruby-Elements handelt, stellt es selbst nichts dar, sein übergeordnetes Ruby-Element verwendet es aber bei der Bestimmung dessen, was es darstellt.","Das rt-Element markiert die Ruby-Textkomponente einer Ruby-Anmerkung. Wenn es sich um ein untergeordnetes Element eines Ruby-Elements oder eines rtc-Elements handelt, das selbst das untergeordnete Element eines Ruby-Elements ist, stellt es selbst nichts dar, sein Ruby-Vorgängerelement verwendet es aber bei der Bestimmung dessen, was es darstellt.","Das rp-Element stellt Fallbacktext bereit, der von Benutzer-Agents angezeigt werden soll, die keine Ruby-Anmerkungen unterstützen. Eine weit verbreitete Konvention besteht darin, die Ruby-Textkomponente einer Ruby-Anmerkung in runde Klammern einzuschließen.","Das time-Element stellt seinen Inhalt zusammen mit einer maschinenlesbaren Form dieses Inhalts im datetime-Attribut dar. Die Art des Inhalts ist wie unten beschrieben auf verschiedene Arten von Datumsangaben, Uhrzeitangaben, Zeitzonenoffsets und Dauerangaben eingeschränkt.","Das code-Element stellt ein Fragment von Computercode dar. Es kann sich um den Namen eines XML-Elements, einen Dateinamen, ein Computerprogramm oder eine andere Zeichenfolge handeln, die ein Computer erkennen kann.","Das var-Element stellt eine Variable dar. Dabei kann es sich um eine tatsächliche Variable in einem mathematischen Ausdruck oder Programmierkontext, einen Bezeichner, der eine Konstante darstellt, ein Symbol, das eine physische Menge identifiziert, einen Funktionsparameter oder einfach um einen Ausdruck handeln, der als Platzhalter im Text verwendet wird.","Das samp-Element stellt Beispieldaten oder Ausgabe in Anführungszeichen aus einem anderen Programm oder Computersystem dar.","Das kbd-Element stellt eine Benutzereingabe dar (normalerweise eine Eingabe über die Tastatur, es kann jedoch auch zum Darstellen anderer Eingaben (z. B. Sprachbefehle) verwendet werden).","Das sub-Element stellt ein tiefgestelltes Zeichen dar.","Das sup-Element stellt ein hochgestelltes Zeichen dar.","Das i-Element stellt eine Textpassage in einem anderen Stil, Ton oder anderweitig vom normalen Text abweichende Textpassage dar. Es gibt eine andere Qualität des Texts an, z. B. eine taxonomische Bezeichnung, einen technischen Begriff, einen idiomatischen Ausdruck aus einer anderen Sprache, eine Transkription, einen Gedanken oder einen Schiffsnamen in westlichen Texten.","Das b-Element stellt eine Textpassage dar, auf die aus praktischen Gründen die Aufmerksamkeit gelenkt werden soll, ohne Wichtigkeit zu vermitteln oder einen anderen Stil oder Ton zu verwenden, z. B. Stichwörter in einer Dokumentzusammenfassung, Produktnamen in einer Bewertung, Aktionswörter in einer interaktiven textgesteuerten Software oder führende Sätze der Absätze eines Artikels.","Das u-Element stellt eine Textpassage mit einer unartikulierten, jedoch ausdrücklich gerenderten Anmerkung dar, die kein Text ist, z. B. ein Eigenname in chinesischem Text (eine Markierung eines chinesischen Eigennamens) oder orthografisch falscher Text.","Das mark-Element stellt eine Textpassage in einem Dokument dar, die zu Referenzzwecken aufgrund ihrer Relevanz in einem anderen Kontext markiert oder hervorgehoben wird. Wenn dieses Element in einem Zitat oder anderem Textblock verwendet wird, auf das bzw. den im Text verwiesen wird, gibt es eine Hervorhebung an, die ursprünglich nicht vorhanden war, dann jedoch hinzugefügt wurde, um die Aufmerksamkeit des Lesers auf einen Textteil zu lenken, der vom ursprünglichen Autor beim Schreiben des Texts ggf. nicht als wichtig betrachtet wurde, jetzt aber unerwarteterweise genauer überprüft wird. Wenn dieses Element im Haupttext eines Dokuments verwendet wird, gibt es einen Teils des Dokuments an, der aufgrund seiner Relevanz für die aktuelle Aktivität des Benutzers hervorgehoben wird.","Das bdi-Element stellt eine Textpassage dar, die von ihrer Umgebung isoliert werden soll, um bidirektionale Textformatierung zu ermöglichen. [BIDI]","Das bdo-Element stellt eine explizite Formatierungssteuerung der Textrichtung für seine untergeordneten Elemente dar. Es ermöglicht Autoren die Außerkraftsetzung des bidirektionalen Unicode-Algorithmus durch explizites Angeben einer Richtungsaußerkraftsetzung. [BIDI]","Das span-Element bedeutet selbst nichts. Es kann jedoch nützlich sein, wenn es zusammen mit den globalen Attributen verwendet wird, z. B. mit class, lang oder dir. Es stellt deren untergeordneten Elemente dar.","Das br-Element stellt einen Zeilenumbruch dar.","Das wbr-Element stellt eine Gelegenheit für einen Zeilenumbruch dar.","Das ins-Element stellt eine Hinzufügung zum Dokument dar.","Das del-Element stellt eine Entfernung aus dem Dokument dar.","Das picture-Element ist ein Container, der seinem enthaltenen img-Element mehrere Quellen bereitstellt, damit Autoren den Benutzer-Agent deklarativ steuern oder ihm Hinweise geben können, welche Bildressource basierend auf der Bildschirm-Pixeldichte, der Viewportgröße, den Bildformat und anderen Faktoren verwendet werden sollen. Es stellt die untergeordneten Elemente dar.","Ein img-Element stellt ein Bild dar.","Das iframe-Element stellt einen geschachtelten Browserkontext dar.","Das embed-Element stellt einen Einbindungspunkt für eine externe Anwendung (normalerweise Nicht-HTML) oder interaktiven Inhalt bereit.","Das object-Element kann eine externe Ressource darstellen, die abhängig vom Typ der Ressource als Bild, als geschachtelter Browserkontext oder als externe Ressource behandelt wird, die von einem Plug-In verarbeitet werden soll.","Das param-Element definiert Parameter für Plug-Ins, die von Objektelementen aufgerufen werden. Es selbst stellt nichts dar.","Ein video-Element wird für die Wiedergabe von Videos oder Filmen sowie Audiodateien mit Untertiteln verwendet.","Ein audio-Element stellt einen Sound- oder Audiodatenstrom dar.","Das source-Element ermöglicht Autoren das Angeben mehrerer alternativer Medienressourcen für media-Elemente. Es stellt selbst nichts dar.","Das track-Element ermöglicht Autoren das Angeben expliziter Textspuren mit externer Zeitsteuerung für media-Elemente. Es stellt selbst nichts dar.","Das map-Element definiert (zusammen mit einem img-Element und ggf. Nachfolgern des area-Elements) eine Imagemap. Das Element stellt deren untergeordnete Elemente dar.","Das area-Element stellt einen Link mit Text und einem entsprechenden Bereich für eine Imagemap oder einen toten Bereich für eine Imagemap dar.","Das table-Element stellt Daten mit mehreren Dimensionen in der Form einer Tabelle dar.","Das caption-Element stellt den Titel der Tabelle dar, die sein übergeordnetes Element ist, wenn es ein übergeordnetes Element besitzt und dieses ein table-Element ist.","Das colgroup-Element stellt eine Gruppe aus mindestens einer Spalte in der Tabelle dar, die sein übergeordnetes Element ist, wenn es ein übergeordnetes Element besitzt und dieses ein table-Element ist.","Wenn ein col-Element ein übergeordnetes Element besitzt und dieses ein colgroup-Element ist, das seinerseits ein übergeordnetes Element besitzt, das ein table-Element ist, stellt das col-Element mindestens eine Spalte in der Spaltengruppe dar, die durch dieses colgroup-Element dargestellt wird.","Das tbody-Element stellt einen Zeilenblock dar, der aus Datentext für das übergeordnete Tabellenelement besteht, wenn das tbody-Element ein übergeordnetes Element besitzt und eine Tabelle ist.","Das thead-Element stellt einen Zeilenblock dar, der aus den Spaltenbeschriftungen (Kopfzeilen) für das übergeordnete Tabellenelement besteht, wenn das thead-Element ein übergeordnetes Element besitzt und eine Tabelle ist.","Das tfoot-Element stellt den Zeilenblock dar, der aus den Spaltenzusammenfassungen (Fußzeilen) für das übergeordnete Tabellenelement besteht, wenn das tfoot-Element ein übergeordnetes Element besitzt und eine Tabelle ist.","Das tr-Element stellt eine Zeile mit Zellen in einer Tabelle dar.","Das td-Element stellt eine Datenzelle in einer Tabelle dar.","Das th-Element stellt eine Kopfzeilenzelle in einer Tabelle dar.","Das form-Element stellt eine Sammlung von Elementen dar, die einem Formular zugeordnet sind. Einige dieser Elemente können bearbeitbare Werte darstellen, die an einen Server für die Verarbeitung übermittelt werden können.","Das label-Element stellt eine Beschriftung in einer Benutzeroberfläche dar. Die Beschriftung kann einem bestimmten Formularsteuerelement zugeordnet werden, das als das Beschriftungssteuerelement des label-Elements bezeichnet wird. Dies geschieht mithilfe des for-Attributs oder durch Positionieren des Formularsteuerelements im label-Element selbst.","Das input-Element stellt ein typisiertes Datenfeld dar und besitzt normalerweise ein Formularsteuerelement, damit Benutzer die Daten bearbeiten können.","Das button-Element stellt eine Schaltfläche dar, die durch ihren Inhalt beschriftet wird.","Das select-Element stellt ein Steuerelement für die Auswahl aus einer Sammlung von Optionen dar.","Das datalist-Element stellt eine Sammlung von option-Elementen dar, die vordefinierte Optionen für andere Steuerelemente darstellen. Beim Rendern stellt das datalist-Element nichts dar und sollte (zusammen mit seinen untergeordneten Elementen) verborgen werden.","Das optgroup-Element stellt eine Gruppe von option-Elementen mit einer gemeinsamen Beschriftung dar.","Das option-Element stellt eine Option in einem select-Element oder als Teil einer Liste der Vorschläge in einem datalist-Element dar.","Das textarea-Element stellt ein Bearbeitungssteuerelement für mehrzeiligen unformatierten Text für den raw-Wert des Elements dar. Der Inhalt des Steuerelements stellt den Standardwert des Steuerelements dar.","Das output-Element stellt das Ergebnis einer Berechnung dar, die von der Anwendung ausgeführt wurde, oder das Ergebnis einer Benutzeraktion.","Das progress-Element stellt den Fortschritt eines Tasks dar. Der Fortschritt ist unbestimmt – er findet statt, es ist jedoch nicht klar, welche Aufgaben bis zum Abschluss des Tasks verbleiben (z. B., weil der Task auf die Antwort eines Remotehosts wartet) –, oder der Fortschritt ist eine Zahl in einem Bereich zwischen null und einem Maximalwert. Im letztgenannten Fall wird angegeben, welcher Prozentsatz der Aufgaben bis jetzt abgeschlossen wurde.","Das meter-Element stellt eine skalare Messgröße in einem bekannten Bereich oder einen Teilwert dar. Beispiele: Datenträgerauslastung, die Relevanz eines Abfrageergebnisses oder der Prozentsatz der Wähler, die für einen bestimmten Kandidaten gestimmt haben.","Das fieldset-Element stellt eine Sammlung von Formularsteuerelementen dar, die optional unter einem gemeinsamen Namen gruppiert sind.","Das legend-Element stellt eine Beschriftung für den restlichen Inhalt des übergeordneten fieldset-Elements des legend-Elements dar, wenn vorhanden.","Das details-Element stellt ein Anzeigewidget dar, aus dem der Benutzer zusätzliche Informationen oder Steuerelemente abrufen kann.","Das summary-Element stellt eine Zusammenfassung, eine Beschriftung oder eine Legende für den restlichen Inhalt des übergeordneten details-Elements (wenn vorhanden) des summary-Elements dar.","Das dialog-Element stellt einen Teil einer Anwendung dar, mit der ein Benutzer interagiert, um eine Aufgabe auszuführen, z. B. ein Dialogfeld, eine Überprüfung oder ein Fenster.","Das script-Element ermöglicht Autoren das Einschließen von dynamischen Skript- und Datenblöcken in ihre Dokumente. Das Element stellt keinen Inhalt für den Benutzer dar.","Das noscript-Element stellt nichts dar, wenn Skripting aktiviert ist. Es stellt seine untergeordneten Elemente dar, wenn Skripting deaktiviert ist. Es wird zum Darstellen von verschiedenem Markup für Benutzer-Agents verwendet, die Skripting unterstützen bzw. nicht unterstützen, indem die Analyse des Dokuments beeinflusst wird.","Das template-Element wird zum Deklarieren von HTML-Fragmenten verwendet, die geklont und mithilfe von Skript in das Dokument eingefügt werden können.","Das canvas-Element stellt Skripts mit einem auflösungsabhängigen Bitmapzeichenbereich bereit, der während des Betriebs zum Rendern von Diagrammen, Spielegrafiken, Bildern oder anderen visuellen Effekten verwendet werden kann.",'"checkbox" unterscheidet sich nicht von der HTML-Kontrollkästcheneingabe. Das Element verwendet nur einen anderen Stil. "checkbox" verhält sich wie jedes Kontrollkästchen von AngularJS.',"Die ionContent-Direktive stellt einen einfach zu verwendenden Inhaltsbereich bereit, der für die Verwendung der benutzerdefinierten Scroll View von Ionic oder des integrierten Überlaufbildlaufs des Browsers konfiguriert werden kann.",'Ein untergeordnetes Element von "ionItem".','Fügt eine feste Fußzeilenleiste unter Inhalt hinzu. Es kann sich auch um einen "subfooter" (weiter oben) handeln, wenn die Klasse "bar-subfooter" angewendet wird.','Fügt eine feste Kopfzeilenleiste über Inhalt hinzu. Es kann sich auch um einen "subheader" (weiter unten) handeln, wenn die Klasse "bar-subheader" angewendet wird.','Ein untergeordnetes Element von "ionContent" oder "ionScroll". Die Direktive "ionInfiniteScroll" ermöglicht den Aufruf einer Funktion, sobald der Benutzer den unteren Seitenrand erreicht oder sich diesem nähert.','"ionInput" ist nur für Texttypeingaben vorgesehen. Ionic verwendet ein <input Type="Text">-HTML-Element innerhalb der Komponente. Dabei führt Ionic einen Zeilenumbruch aus, um Benutzeroberfläche und Interaktivität besser zu verarbeiten.','Ein untergeordnetes Element von "ionList".',"Das List-Element ist ein häufig verwendetes Schnittstellenelement in fast jedem mobilen App. Der Inhalt kann Basistext bis hin zu Schaltflächen, Umschaltflächen, Symbolen und Miniaturansichten sein.","Das Modal-Element ist ein Inhaltsbereich, der die Hauptansicht des Benutzers vorübergehend verdecken kann. Es wird normalerweise verwendet, um eine Auswahl zu treffen oder ein Element zu bearbeiten.",'Ein untergeordnetes Element von "ionNavBar". Es erstellt eine Schaltfläche "Zurück" in einer "ionNavBar". Die Schaltfläche "Zurück" wird angezeigt, wenn der Benutzer im aktuellen Navigationsstapel zurückgehen kann.',"Wenn Sie eine ionNavView-Direktive verwenden, können Sie auch eine <ion-nav-bar> erstellen. Auf diese Weise wird eine obere Leiste erstellt, die aktualisiert wird, wenn sich der Zustand der Anwendung ändert.",'Ein untergeordnetes Element von "ionNavView". Verwenden Sie "ionNavButtons", um die Schaltflächen auf der "ionNavBar" aus einer "ionView" festzulegen.','Ein untergeordnetes Element von "ionNavView". Die ionNavTitle-Direktive ersetzt einen ionNavBar-Titeltext durch benutzerdefinierten HTML-Text aus in einer ionView Vorlage.','Die ionNavView-Direktive wird zum Rendern von Vorlagen in Ihrer Anwendung verwendet. Jede Vorlage ist Teil eines Zustands. Zustände werden normalerweise einer URL zugeordnet und programmgesteuert mithilfe von "angular-ui-router" definiert.','Ein untergeordnetes Element von "ionItem". Erstellt ein Optionsfeld in einem Listenelement, das angezeigt wird, wenn der Benutzer das Element nach links wischt.','Ein einfacher Container, der Inhalt ohne Nebenwirkungen aufnimmt. Fügt dem Element die Klasse "pane" hinzu.',"Das Popover-Element ist eine Ansicht, die über dem Inhalt einer App frei angeordnet ist. Mit Popover-Elementen können auf einfache Weise Informationen für Benutzer bereitgestellt oder von Benutzern erfasst werden.",'Die ionRadio-Direktive unterscheidet sich nicht von der HTML-Optionsfeldeingabe. Das Element verwendet nur einen anderen Stil. "ionRadio" verhält sich wie jede Optionsfeldeingabe von AngularJS.','Ein untergeordnetes Element von "ionContent" oder "ionScroll". Ermöglicht das Hinzufügen von "pull-to-refresh" zu einer "scrollView". Platzieren Sie dieses Element als erstes untergeordnetes Element des Elements "ionContent" oder "ionScroll".','Ein untergeordnetes Element von "ionItem".',"Erstellt einen bildlauffähigen Container für alle darin enthaltenen Inhalte.",'Ein untergeordnetes Element von "ionSideMenus". Ein Container für ein Seitenmenü. Ein gleichgeordnetes Element einer ionSideMenuContent-Direktive.','Ein untergeordnetes Element von "ionSideMenus". Ein Container für den sichtbaren Hauptinhalt. Ein gleichgeordnetes Element von mindestens einer ionSideMenu-Direktive.',"Ein Containerelement für mindestens ein Seitenmenü und den Hauptinhalt. Ermöglicht das Umschalten des Menüs auf der linken und/oder rechten Seite durch Nebeneinanderziehen des Hauptinhaltsbereichs.",'Ein untergeordnetes Element von "ionSlideBox". Zeigt eine Folie innerhalb eines slidebox-Elements an.',"Eine SlideBox ist ein mehrseitiger Container, in dem jede Seite gewischt oder gezogen werden kann.","Die ionSpinner-Direktive stellt eine Vielzahl von animierten Drehfeldern bereit.",'Ein untergeordnetes Element von "ionTabs". Es enthält den Inhalt einer Registerkarte. Der Inhalt ist nur vorhanden, während die angegebene Registerkarte ausgewählt ist.','Stellt eine Benutzeroberfläche mit mehreren Registerkarten, einer Registerkartenleiste und einer Sammlung von "Seiten" bereit, die mit der TAB-TASTE durchlaufen werden kann.','"ion-title" ist eine Komponente, die den Titel von "ionNavbar" festlegt.',"Ein toggle-Element ist ein animierter Schalter, der ein angegebenes Modell an einen booleschen Wert bindet. Ermöglicht das Ziehen des Schalterknopfs. Das toggle-Element verhält sich wie jedes andere Kontrollkästchen von AngularJS.",'Ein untergeordnetes Element von "ionNavView". Ein Container für Anzeigeinhalt und alle Navigations- und Kopfzeilenleisten-Informationen.']});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs\languages\html\common\htmlWorker.nls.de.js.map
