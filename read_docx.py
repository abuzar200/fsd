import zipfile
import xml.etree.ElementTree as ET
import sys

def get_docx_text(path):
    word_namespace = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    para = word_namespace + 'p'
    text = word_namespace + 't'
    
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        
        tree = ET.fromstring(xml_content)
        paragraphs = []
        for paragraph in tree.iter(para):
            texts = [node.text for node in paragraph.iter(text) if node.text]
            if texts:
                paragraphs.append("".join(texts))
        return "\n".join(paragraphs)
    except Exception as e:
        return f"Error reading docx: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) > 1:
        with open("out.txt", "w", encoding="utf-8") as f:
            f.write(get_docx_text(sys.argv[1]))
    else:
        print("Please provide a file path")
